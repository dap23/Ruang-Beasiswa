import BigLogo from "../../assets/logo-besar.png";
import ImageAboutPage from "../../assets/logoAbout.png";
import LogoLeft from "../../assets/logo-landing-left.png";
import LogoRight from "../../assets/logo-landing-right.png";
import LogoLPDP from "../../assets/logo-lpdp.png";
import LogoDjarum from "../../assets/logo-djarum-beasiswa.png";
import LogoRG from "../../assets/logo-ruang-guru.png";
import "./about.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <h1 className="title">About Us</h1>
      <div className="wrapper-up">
        <div>
          <img src={ImageAboutPage} alt="" className="img-middle-left" />
        </div>
        <div className="content">
          <img src={BigLogo} alt="" className="img-big-logo" />
          <p className="deskripsi">
            <strong>RUANG BEASISWA</strong> merupakan media yang membagikan
            informasi terbaru seputar Beasiswa yang ada di Indonesia dari
            Beasiswa tingkat daerah, Beasiswa tingkat provinsi hingga Beasiswa
            tingkat nasional.<strong> RUANG BEASISWA </strong> memberikan
            kesempatan untuk para pelajar mulai dari tingkat SD, SMP dan SMA
            serta mahasiswa yang sedang mengikuti perkuliahan untuk mendaftarkan
            diri demi mendapatkan beasiswa.<strong> RUANG BEASISWA </strong>{" "}
            juga memberikan tips dan trik untuk para pelajar dan mahasiswa demi
            mendapatkan beasiswa yang diinginkan.
          </p>
        </div>
      </div>
      <div className="wrapper-bottom">
        <h1>Our Member</h1>
        <div className="wrapper-bottom-content">
          <div className="wrapper-bottom-content-name">
            <p>
              <strong>Ahmad Sulthon Al Ayyubi</strong>
            </p>
            <p>Universitas Jember</p>
            <p>BE-2181775</p>
          </div>
          <div className="wrapper-bottom-content-name">
            <p>
              <strong>Dian Pratiwi</strong>
            </p>
            <p>Universitas Bhayangkara Jakarta Raya</p>
            <p>BE-2200656</p>
          </div>
          <div className="wrapper-bottom-content-name">
            <p>
              <strong>Fitriani</strong>
            </p>
            <p>Institut Teknologi Kalimantan</p>
            <p>FE-2047611</p>
          </div>
        </div>
        <div className="wrapper-bottom-content">
          <div className="wrapper-bottom-content-name">
            <p>
              <strong>Aszhuraini</strong>
            </p>
            <p>Universitas Jember</p>
            <p>FE-2243890</p>
          </div>
          <div className="wrapper-bottom-content-name">
            <p>
              <strong>Muhammad Daffa Miftah Rizq</strong>
            </p>
            <p>Universitas Diponegoro</p>
            <p>FE-2120197</p>
          </div>
          <div className="wrapper-bottom-content-name">
            <p>
              <strong>Rio Yuda Sakti</strong>
            </p>
            <p>Universitas Islam Indonesia</p>
            <p>FE-2156185</p>
          </div>
        </div>
      </div>
      <div className="sponsor">
        <h4>Powered by</h4>
        <div id="logo-sponsor">
          <img src={LogoLPDP} alt="" className="img-logo-lpdp" />
          <img src={LogoDjarum} alt="" className="img-logo-djarum" />
          <img src={LogoRG} alt="" className="img-logo-rg" />
        </div>
      </div>
      <div className="decor-bawah">
        <img src={LogoLeft} alt="" className="img-decor-left" />
        <img src={LogoRight} alt="" className="img-decor-right" />
      </div>
      <Footer />
    </div>
  );
};

export default About;
