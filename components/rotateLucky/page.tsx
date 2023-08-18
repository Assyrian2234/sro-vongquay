import appSlice from "@/app/appSlice";
import { RootState } from "@/redux/configure-store";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const RotateLucky = () => {
  const { updateModalState } = appSlice.actions;
  const dispath = useAppDispatch();
  return (
    <section className="all_vongquay">
      <div className="wrapper">
        <img
          className="img_vongquay"
          src="/assets/images/img_vongquay.png"
          alt=""
        />
        <div className="bx_texchay">
          {/* <marquee>
                <p>Xin chúc mừng Lữ khách <em className="mau_tx1">Alibaba123</em> nhận <em className="mau_tx1"> 1 Tai nghe</em></p>
                <p>Ồ WAO! Lữ khách <em className="mau_tx2">Kimchi225</em> đã trúng giải <em className="mau_tx2">Thẻ cào điện thoại 500K</em></p>
            </marquee> */}
        </div>
        <ul className="ls_btn_vquayto">
          <li>
            <a href="" className="btn_thele">
              Thể lệ
            </a>
          </li>
          <li>
            <a
              href=""
              className="btn_khodo"
              onClick={() => {
                dispath(
                  updateModalState(
                    <div
                      style={{
                        zIndex: 100,
                        width: 100,
                        height: 100,
                      }}
                    >
                      test redux
                    </div>
                  )
                );
              }}
            >
              Kho đồ
            </a>
          </li>
        </ul>
        <div className="clear"></div>
        <div className="bg_alvongquay">
          <img
            className="img_trangtri_btom"
            src="/assets/images/img_trangtri_btom.png"
            alt=""
          />
          <img
            className="img_trangtri_left"
            src="/assets/images/img_trangtri_left.png"
            alt=""
          />
          <div className="btn_quayallvq">
            <p>
              Số lượt quay hiện có: <b>200</b>
            </p>
            <a href="">
              <em>QUAY</em>
            </a>
          </div>
          <div className="nd_vpvongquay">
            <div className="all_bgvatpham">
              Chúc bạn
              <br /> may mắn
              <br /> lần sau!
            </div>
            <div className="all_bgvatpham all_bgvatpham2">
              <img src="/assets/images/img_vp1.png" alt="" />
            </div>
            <div className="all_bgvatpham all_bgvatpham3">
              <img src="/assets/images/img_vp2.png" alt="" />
            </div>
            <div className="all_bgvatpham all_bgvatpham4">
              <img src="/assets/images/img_vp3.png" alt="" />
            </div>
            <div className="all_bgvatpham all_bgvatpham5">
              <img src="/assets/images/img_vp4.png" alt="" />
            </div>
            <div className="all_bgvatpham all_bgvatpham6 all_vptrung">
              <img src="/assets/images/img_vp1.png" alt="" />
            </div>
            <div className="all_bgvatpham all_bgvatpham7">
              Chúc bạn
              <br /> may mắn
              <br /> lần sau!
            </div>
            <div className="all_bgvatpham all_bgvatpham8">
              <img src="/assets/images/img_vp10.png" alt="" />
              <div className="bx_tooti_hv">
                Thẻ cào điện thoại Viettel mệnh giá 20.000 VND
              </div>
            </div>
            <div className="all_bgvatpham all_bgvatpham9">
              Chúc bạn
              <br /> may mắn
              <br /> lần sau!
            </div>
            <div className="all_bgvatpham all_bgvatpham10">
              <img src="/assets/images/img_vp9.png" alt="" />
            </div>
            <div className="all_bgvatpham all_bgvatpham11">
              <img src="/assets/images/img_vp8.png" alt="" />
            </div>
            <div className="all_bgvatpham all_bgvatpham12">
              <img src="/assets/images/img_vp7.png" alt="" />
            </div>
            <div className="all_bgvatpham all_bgvatpham13">
              <img src="/assets/images/img_vp6.png" alt="" />
            </div>
            <div className="all_bgvatpham all_bgvatpham14">
              Chúc bạn
              <br /> may mắn
              <br /> lần sau!
            </div>
            <div className="all_bgvatpham all_bgvatpham15">
              Chúc bạn
              <br /> may mắn
              <br /> lần sau!
            </div>
            <div className="all_bgvatpham all_bgvatpham16">
              <img src="/assets/images/img_vp5.png" alt="" />
            </div>
            <div className="all_bgvatpham all_bgvatpham17">
              <img src="/assets/images/img_vp5.png" alt="" />
            </div>
            <div className="all_bgvatpham all_bgvatpham18">
              <img src="/assets/images/img_vp5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RotateLucky;
