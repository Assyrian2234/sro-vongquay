"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import {
  accountGetBalance,
  getAccountInfo,
  getAccountLogin,
  getFullAccountInfo,
} from "@/services/client-side/account-info/account-info.api";
import JSCookie from "js-cookie";
import { useMyReducer } from "@/store/Provider";
import { logError, logInfo } from "@/utils/log-helper";
import moment from "moment";
import { AccountFullInfoType } from "@/types/componentTypes";
import { StoreContext } from "@/store";
import SpinLoading from "../common/spin-loading";
import appSlice from "@/app/appSlice";
type TokenProps = {
  tokenName: string;
  tokenValue: string;
};
type HeaderProps = {
  token: TokenProps;
};
const Header = ({ token }: HeaderProps) => {
  const state = useContext(StoreContext);
  console.log(state);
  const { setLogin, setLogout, loadingLoginAPI } = useMyReducer();
  const { updateModalState } = appSlice.actions;
  const [hrefJS, setHrefJS] = useState(0);
  const [accountname, setAccountName] = useState<any>("");
  const [currentToken, setCurrentToken] = useState<any>("");
  const [crrBalance, setBalance] = useState<number>(0);
  logInfo("Header", {
    tokenName: token.tokenName,
    tokenValue: token.tokenValue,
  });
  const loginAction = () => {
    localStorage.clear();
    setHrefJS(1);
    // @ts-ignore
    return calPopLogin();
  };
  const logoutAction = () => {
    setAccountName("");
    setLogout();
    localStorage.clear();
    // @ts-ignore
    return Logout();
  };
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.clear();
      localStorage.setItem(token.tokenName, token.tokenValue);
      setCurrentToken(token.tokenValue);

      JSCookie.set("vtc-jwt", token.tokenValue, {
        expires: moment().add(23, "hour").toDate(),
      });
    }
  }, []);
  useEffect(() => {
    getAccountInfo()
      .then((res) => {
        if (res.data.code > 0) {
          console.log("resssssssssss", res);
          setAccountName(res.data.data);
          logInfo("getAccountInfo", "", `AccountName: ${res.data.data}`);
          setLogin();
          //   if (res.data.data) {
          //     getAccountLogin()
          //       .then((r) => {})
          //       .catch((error) => {
          //         logError("getAccountLogin", "", { error: error.toString() });
          //       });
          //     const data = {
          //       accountName: res.data.data,
          //     };
          //     logInfo("getAccountLogin", "", data);
          //     // getFullAccountInfo().then((res) => {
          //     //   logInfo("getFullAccountInfo", "", res);
          //     //   if (res && res.data.code > 0) {
          //     //     // if (res.data.data.IsVip === 1 || res.data.data.IsVip === 2) {
          //     //     // } else {
          //     //     //   updateModalState(<Modalid />);
          //     //     // }
          //     //     loadingLoginAPI(false);
          //     //   }
          //     // });
          //   }
          loadingLoginAPI(false);
        }
      })
      .finally(() => {
        loadingLoginAPI(false);
      });
  }, [currentToken]);
  //   useEffect(() => {
  //     accountGetBalance().then((res) => {
  //       if (res && res.data.code > 0) {
  //         setBalance(res.data.data);
  //       }
  //     });
  //   }, [state.state.refresh]);

  useEffect(() => {
    setTimeout(() => {
      const targets = document.querySelectorAll(`[href="javascript:;"]`);
      for (let i = 0; i < targets.length; i++) {
        targets[i].removeAttribute("href");
      }
      setHrefJS(0);
    }, 300);
  }, [hrefJS]);
  return (
    <header>
      <div className="wrapper">
        <h1 className="logo_to">
          <a href="">
            <img src="/assets/images/logo.png" alt="" />
          </a>
        </h1>
        <ul className="ls_menutop">
          <li className="link_dn_mobila">
            <div className="box_dangnhapall">
              <div className="bx_dangnhap_okus">
                <p>
                  <b>Anita764</b>
                </p>
                <a href="">
                  <img src="/assets/images/icon_dx.png" alt="" />
                </a>
              </div>
            </div>
          </li>
          <li>
            <a href="">Trang chủ</a>
          </li>
          <li>
            <a href="">Fanpage</a>
          </li>
          <li>
            <a href="">Group</a>
          </li>
        </ul>
        <div className="box_dangnhapall">
          <div className="bx_dangnhap_okus"></div>
          <a href="" className="link_alsharee">
            <img src="/assets/images/img_share.jpg" alt="" />
            <div className="bx_tooti_share">
              Share để nhận <em>01</em> lượt quay miễn phí
            </div>
          </a>
        </div>
        <a href="javascript:void(0);" className="btn_mboli"></a>
      </div>
    </header>
  );
};
export default Header;
