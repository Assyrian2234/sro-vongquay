const Footer = () => {
    return (
        <footer>
        <div className="wrapper">
            <div className="bx_left_footer">
                <a href="" className="all_logo_ft"><img src="/assets/images/logo_ft.png" alt="" /></a>
                <p>&copy;VTC Game là Nhà phát hành duy nhất tại Việt Nam đã đăng ký bản quyền <br/>
                với &copy;WeMade Max. Bản quyền của trò chơi thuộc công ty WeMade Max.</p>
                <div className="tett_all_ft">
                    <h4>TỔNG CÔNG TY TRUYỀN THÔNG ĐA PHƯƠNG TIỆN (VTC)</h4>
                    <h5>CÔNG TY VTC CÔNG NGHỆ VÀ NỘI DUNG SỐ (VTC INTECOM)</h5>
                </div>
            </div>
            <div className="bx_center_footer">
                <div className="tett_all_ft">
                    <h5>Chịu trách nhiệm quản lí nội dung:</h5>
                    <p>Ông Nguyễn Hùng Cương</p>
                </div>
                <table className="table_footer">
                    <tbody>
                        <tr>
                            <td><h5>thông tin liên hệ</h5></td>
                        </tr>
                        <tr>
                            <td><a href="http://hotro.vtc.vn/" target="_blank" className="icon-footer icon-hotro-footer">hotro.vtc.vn</a></td>
                            <td><a href="https://www.facebook.com/sro.vtcgame.vn" target="_blank" className="icon-footer icon-fb-footer">fb.com/SRO</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bx_right_footer">
                <div className="tett_all_ft">
                    <h5>trụ sở hà nội</h5>
                    <p>Tầng 14, Tòa nhà VTC 23 Lạc Trung, Quận Hai Bà Trưng, Hà Nội</p>
                </div>
                <div className="tett_all_ft margin_0">
                    <h5>Văn Phòng Đại Diện TP. hồ chí minh </h5>
                    <p>259 Đồng Đen, Phường 10, Quận Tân Bình, TP. Hồ Chí Minh</p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;