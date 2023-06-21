class Heroelements extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .jumbotron {
        background-image: linear-gradient(rgba(0, 0, 5, 0.5), rgba(0, 0, 5, 0.5)),
        url("../heros/hero-image_4.jpg");
        background-size: cover;
        display: flex;
        position: relative;
        align-items: center;
        min-height: 380px;
        width: 100%;
        text-align: center;
        background-position: center;
        background-color: Black !important;
      }
      .hero {
        margin: 0 auto;
        max-width: 800px;
      }
      .judul {
        color: white;
        font-weight: 600;
        font-size: 36px;
        text-shadow: 1px 1px #141414;
      }
      .subjudul {
        color: white;
        margin-top: 16px;
        font-size: 20px;
        font-weight: 600;
        text-shadow: 1px 1px #141414;
      }
        </style>
        <div class="jumbotron">
        <div class="hero">
          <h1 class="judul">Welcome to Organic's Kitchen</h1>
          <p class="subjudul">
           Makanan Sehat Solusi Keluarga Kuat.
          </p>
        </div>
      </div>
      `;
  }
}

customElements.define('jumbotron-bar', Heroelements);
