const Header = () => {
    return (
        <header>
        <div className="wrapper">
            <h1 className="logo_to"><a href=""><img src="/assets/images/logo.png" alt=""/></a></h1>
            <ul className="ls_menutop">
                <li className="link_dn_mobila">
                    <div className="box_dangnhapall">
                        <div className="bx_dangnhap_okus">
                            <p><b>Anita764</b></p>
                            <a href=""><img src="/assets/images/icon_dx.png" alt=""/></a>
                        </div>
                    </div>
                </li>
                <li><a href="">Trang chủ</a></li>
                <li><a href="">Fanpage</a></li>
                <li><a href="">Group</a></li>
            </ul>
            <div className="box_dangnhapall">
                <div className="bx_dangnhap_okus">
                    <p>Xin chào, <b>Anita764</b></p>
                    <a href=""><img src="/assets/images/icon_dx.png" alt=""/></a>
                </div>
                <a href="" className="link_alsharee">
                    <img src="/assets/images/img_share.jpg" alt=""/>
                    <div className="bx_tooti_share">Share để nhận <em>01</em> lượt quay miễn phí</div>
                </a>
            </div>
            <a href="javascript:void(0);" className="btn_mboli"></a>
        </div>
    </header>
    )
}
export default Header;
