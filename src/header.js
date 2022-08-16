export default function Header() {

    let styleHeader = {
        background : '#147709',
        color: 'white',
        fontFamily:'Quicksand',
    }

    let styleNumber = {
        background : '#FF9200',
        borderRadius: '50%',
        height: '35px',
        width: '35px',
        textAlign:'center',
        padding:'10px',
        margin: '15px',
        display: 'inline-block',
        font:'32px Arial, sans-serif',
    }

    let styleTitle = {
        display: 'inline-block',
        fontSize:'25px',
    }

    return (
        <div style={styleHeader}>
            <div style={styleNumber}> 1 </div>
            <p style={styleTitle} >Trail of Giants</p>
        </div>
    );
}