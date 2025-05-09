function useJoinArray({ tables = {}, joins = [], select = {} }) {
    // Nếu không có JOIN
    if (joins.length === 0) {
        if (!select || Object.keys(select).length === 0) {
            // Lấy bảng đầu tiên từ tables (hoặc có thể lấy bảng từ tên trong select nếu bạn muốn chính xác hơn)
            const firstTableName = Object.keys(tables)[0]
            return tables[firstTableName]
        } else {
            // Lấy bảng đầu tiên từ select (dựa vào "table.column")
            const firstPath = Object.values(select)[0]
            const [table] = firstPath.split(".")
            const baseTable = tables[table]
            return baseTable.map(row => {
                const selected = {}
                for (const [alias, path] of Object.entries(select)) {
                    const [, column] = path.split(".")
                    selected[alias] = row[column]
                }
                return selected
            })
        }
    }

    // Nếu có JOINS
    let result = tables[joins[0].from]

    for (const join of joins) {
        const allowedKeys = ['from', 'table', 'fromKey', 'toKey']
        const joinKeys = Object.keys(join)
        const isValid = joinKeys.every(key => allowedKeys.includes(key)) && joinKeys.length === 4
        if (!isValid) {
            throw new Error(`Join object invalid: must have only from, table, fromKey, toKey`)
        }

        const nextTable = tables[join.table]
        result = result.flatMap(row1 =>
            nextTable
                .filter(row2 => row1[join.fromKey] === row2[join.toKey])
                .map(row2 => ({ ...row1, ...row2 }))
        )
    }

    // Nếu không có select -> giữ nguyên kết quả (select *)
    if (!select || Object.keys(select).length === 0) {
        return result
    }

    // Ngược lại, lọc các cột được chọn
    return result.map(row => {
        const selected = {}
        for (const [alias, path] of Object.entries(select)) {
            const [, column] = path.split(".")
            selected[alias] = row[column]
        }
        return selected
    })
}

export default useJoinArray