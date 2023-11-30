import './FlexLine.scss'

const FlexLine = (props) => {

    const { text, number } = props;


    return <>
        <div className="flex-line">
            <span className="flex-line-first">{text}</span>
            <span className="flex-line-second">$ {number.toFixed(2)}</span>
        </div>
    </>
}

export default FlexLine