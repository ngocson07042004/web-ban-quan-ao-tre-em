import axios from 'axios'
import { v7 as uuid } from 'uuid'
import { toast } from 'react-toastify'

// Hàm chuyển đổi
function shortenText(text, maxLength) {
    if (text?.length <= maxLength) return text
        return text?.slice(0, maxLength).trim() + '...'
}


// Hàm định dạng mệnh giá
function formatPrice(price) {
    const priceVND = Number(price) * 1000
    return `${priceVND.toLocaleString("vi-VN")}đ`
}

async function handleAddToCart(user, idProduct, nameProduct, imageUrl, price, setCarts) {
        if (!user) {
            toast.error("Bạn chưa đăng nhập!")
            return
        }

        try {
            const checkRes = await axios.get(
                `${process.env.REACT_APP_URL_BACKEND}/get/api/check-cart`,
                { 
                    params: { user, idProduct },
                    withCredentials: true 
                }
            )

            const exists = checkRes.data.exists

            if (!exists) {
                const uid = uuid()
                const res = await axios.post(
                    `${process.env.REACT_APP_URL_BACKEND}/post/api/add-to-cart`,
                    { uid, user, idProduct, quantity: 1 },
                    { withCredentials: true }
                )

                if (res.data === "Error") {        
                    toast.error("Thêm sản phẩm thất bại!")
                } 
                else {
                    toast.success("Thêm giỏ hàng thành công!")
                    setCarts(prev => [...prev, {
                        idCart: uid, user, idProduct, nameProduct, imageUrl, price, quantity: 1
                    }])
                }
            }
            else {
                const res = await axios.put(
                    `${process.env.REACT_APP_URL_BACKEND}/put/api/add-to-cart`,
                    { user, idProduct, quantity: 1 },
                    { withCredentials: true }
                )
                
                if(res.data === "Error") {
                    toast.error("Cập nhật sản phẩm thất bại!")
                }
                else {
                    toast.success("Đã tăng số lượng sản phẩm!")
                    setCarts(prev => prev.map(item =>
                        item.idProduct === idProduct
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ))
                }
            }
        }
        catch (err) {
            toast.error("Lỗi kết nối tới máy chủ!")
        }
    }

export { shortenText, formatPrice, handleAddToCart }