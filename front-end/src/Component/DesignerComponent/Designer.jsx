import "./Designer.css"



function Designer(){

    const styleDesigner = "#00AFEF"
    const styleSale = "#FFFF"
    return (
        <div className='Container'>
            <div className='App-box' id="Slidebar">
                <div className="Menu">
                    <h2>Dashboard</h2>
                </div>
            </div>
            <div className='App-box' id="Content">
                <div className='App-Content-analytics'>
                    <div className='App-Content-analytics-item'>Thiết kế mới</div>
                    <div className='App-Content-analytics-item'>Xếp file</div>
                    <div className='App-Content-analytics-item'>Đã chốt</div>
                    <div className='App-Content-analytics-item'>Hủy</div> 
                </div>
                <div className='App-Content-designer-box'>
                    <div className='App-Content-designer'>
                        <div className='App-Content-designer-news'>
                            <div className="App-Content-designer-news-item" style={{background:styleDesigner}}>Thiết Kế</div>
                            <div className="App-Content-designer-news-item" style={{background:styleSale}}>Thiết Sale</div>       
                        </div>
                        <div className='App-Content-designer-oders'>
                              
                        </div>
                    </div>
                    <div className='App-Content-designer'>
                        <div className='App-Content-designer-news'>
                            <div className="App-Content-designer-news-item" style={{background:styleDesigner}}>Chờ xếp</div>
                            <div className="App-Content-designer-news-item" style={{background:styleSale}}>Đã xếp</div> 
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Designer