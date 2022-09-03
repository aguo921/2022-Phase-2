import Tooltip from "@mui/material/Tooltip";
import Rating from "@mui/material/Rating"

type Props = {
    ratingsCount: number | undefined,
    averageRating: number | undefined
}

function Ratings(props: Props) {
    let title = props.ratingsCount === undefined ? (
        `0 ratings`
    ) : props.ratingsCount === 1 ? (
        `1 rating`
    ) : (
        `${props.ratingsCount} ratings`
    )

    let averageRating = props.averageRating === undefined ? (
        null
    ) : (
        props.averageRating
    )

    return (
        <Tooltip
            title={title}
            placement="right"
        >
            <span>
                <Rating
                    precision={0.1}
                    value={averageRating}
                    readOnly
                />
            </span>
        </Tooltip>
    )
}

export default Ratings