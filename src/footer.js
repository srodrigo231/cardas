export default function Footer() {

    let styleFooter={
        background : '#147709',
        color: 'white',
        fontFamily:'Quicksand',
        textAlign:'center',
        height: '80px',
    }

    let styleText={
        padding:"20px",
        display: 'inline-block',
    }

    return (
        <footer style={styleFooter}>
            <div style={styleText}>
                You're only 20 feet away from the next giant history. Keep going!
            </div>
        </footer>
    )
}