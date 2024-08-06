import { DARK_CELL, LIGHT_CELL } from "../../../constants/colors"
import { RowProps } from "../../../types/game/component-types"
import Cell from "../Cell/Cell"
import styles from "./Row.module.css"

const Row = ({ row, list, handle }: RowProps)=>{
    return (
        <div className={styles.row}>
            {list.map((cell, column)=>{
                return <Cell
                    key={`${row}-${column}`}
                    row={row}
                    column={column}
                    color={(row + column)%2 === 0 ? LIGHT_CELL : DARK_CELL}
                    handle={handle}
                    figure={cell}
                />
            })}
        </div>
    )
}

export default Row