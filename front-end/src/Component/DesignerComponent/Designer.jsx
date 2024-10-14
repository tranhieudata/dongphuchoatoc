import "./Designer.css"
import logo from "../../static/img/logo.png"



function Designer({user}){

    const styleDesigner = "#00AFEF"
    const styleSale = "#FFFF"
    return (
        <div className='Container'>
            <div className='App-box' id="Slidebar">
                <div className="Menu">
                    <p>Dashboard</p>
                </div>
            </div>
            <div className='App-box' id="Content">
                <div className='App-Content-analytics'>
                    <div className='App-Content-analytics-item'>
                        <div className="number-new-design">4</div>
                        <div>Thiết kế mới</div>
                    </div>
                    <div className='App-Content-analytics-item'>
                        <div className="number-new-file">15</div>
                        <div>Xếp file</div>
                    </div>
                    <div className='App-Content-analytics-item'>
                        <div className="number-new-done">100</div>
                        <div>Đã chốt</div></div>
                    <div className='App-Content-analytics-item'>
                        <div className="number-new-delete">2</div>
                        <div>Hủy</div></div> 
                </div>
                <div className='App-Content-designer-box'>
                    <div className='App-Content-designer'>
                        <div className='App-Content-designer-news'>
                            <div className="App-Content-designer-news-item1" style={{background:styleDesigner}}>Thiết Kế</div>
                            <div className="App-Content-designer-news-item2" style={{background:styleSale}}>Sale</div>       
                        </div>
                        <div className='App-Content-designer-oders'>
                            {/* Phần này chứa đơn hàng thiết kế mới */}

                            <div className="orders-top-box">
                                <div className="number-code">#MS7798</div>
                                <div className="deadline">29-10-2024</div>
                            </div>
                            <div className="oders-content-box">
                                <div className="text-box">
                                    
                                    <div className="text-box-item-1">5 tạp dề + mũ bếp xanh lá 5 tạp dề + mũ bếp đỏ đô k in 5 tạp dề + mũ bếp xanh lá 5 tạp dề + mũ bếp đỏ đô k in</div>
                                    {/* <div className="text-box-item-2">a Hiếu</div>
                                    <div className="text-box-item-3">0969468988</div>
                                    <div className="text-box-item-4">320 Định Công
                                    
                                    </div>
                                    <div className="text-box-item-5">Total: 3700000</div>
                                    <div className="text-box-item-6">Đã Cọc: 1500000</div> */}
                                    
                                </div>
                                <div className="picture-box">
                                    <img className="order-picture" src={logo} alt="logo"/>
                                    <img className="order-picture" src={logo} alt="logo"/>
                                    <img className="order-picture" src={logo} alt="logo" href=""/>
                                </div>
                            </div>
                            <div className="order-bottom-box"> 
                                <div>forwart</div>
                                <div>working</div>
                                <div>edit</div>
                                <div>next</div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='App-Content-designer'>
                        <div className='App-Content-designer-news'>
                            <div className="App-Content-designer-news-item1" style={{background:styleDesigner}}>Chờ xếp</div>
                            <div className="App-Content-designer-news-item2" style={{background:styleSale}}>Đã xếp</div> 
                        </div>
                        <div className='App-Content-designer-oders'>
                              {/* Phần này chứa đơn hàng chờ xếp file*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Designer