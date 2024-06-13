<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Degusta Saveur</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="shortcut icon" href="img/icon.png" type="image/x-icon" />
  {/* nav */}
  <nav>
    <h1 className="logo">Degusta Saveur</h1>
    <ul>
      <li>
        <a href="#" className="active">
          Home
        </a>
      </li>
      <li>
        <a href="#">Sobre</a>
      </li>
      <li>
        <a href="#">Menu</a>
      </li>
      <li>
        <a href="#">Contato</a>
      </li>
      <li>
        <a href="login.html">Login</a>
      </li>
      <li>
        <a href="#">Cadastro</a>
      </li>
    </ul>
  </nav>
  {/* header */}
  <section className="header">
    <h1 className="main-headings">Faça uma de nossas receitas</h1>
    <h1 className="primary-heading">A sua refeição!</h1>
  </section>
  {/* nossa história */}
  <section className="nossa-historia">
    <section className="img-container">
      <img src="./img/lamen.jpg" className="img" alt="" />
    </section>
    <div className="section-content">
      <div className="title-style">
        <h1 className="title">Nossa história</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Dolor doloremque reiciendis ea voluptatibus. <br />
        Quis modi ratione incidunt ipsam
      </p>
      <button style={{ marginTop: 20 }}>Saiba mais</button>
    </div>
  </section>
  {/* Site perfeito para suas comidas favoritas */}
  <section className="meal-container">
    <div className="content-section">
      <div className="title-style">
        <h1 className="title-two">
          Site perfeito <br />
          para suas <br />
          comidas favoritas!
        </h1>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button style={{ marginTop: 20 }}>Saiba mais</button>
    </div>
    <section className="img-container">
      <img src="./img/chicken-curry.jpg" className="img-2" alt="" />
    </section>
  </section>
  {/* Receitas */}
  <section className="produtos">
    <h1 className="title-three">Receitas</h1>
    <section className="cards">
      <div className="card">
        <div className="card-img img-one" />
        <div className="card-title">
          <h1>Pratos principais</h1>
        </div>
        <div className="items">
          <p>Café da manhã</p>
          <p>Almoço</p>
          <p>Jantar</p>
        </div>
        <button>Veja mais</button>
      </div>
      <div className="card">
        <div className="card-img img-two" />
        <div className="card-title">
          <h1>Pratos veganos</h1>
        </div>
        <div className="items">
          <p>Café da manhã</p>
          <p>Almoço</p>
          <p>Jantar</p>
        </div>
        <button>Veja mais</button>
      </div>
      <div className="card">
        <div className="card-img img-three" />
        <div className="card-title">
          <h1>Pratos doces</h1>
        </div>
        <div className="items">
          <p>Café da manhã</p>
          <p>Almoço</p>
          <p>Jantar</p>
        </div>
        <button>Veja mais</button>
      </div>
    </section>
  </section>
  {/* footer */}
  <hr />
  <footer>
    <div className="container">
      <h1 className="heading-info">
        Sobre <span>Nós</span>
      </h1>
      <p>
        Sit amet consectetur adipisicing elit. Dolor doloremque reiciendis ea
        voluptatibus.
      </p>
    </div>
    <div className="container">
      <h1 className="heading-info">
        Fale <span>Conosco</span>
      </h1>
      <p>
        Sit amet consectetur adipisicing elit. Dolor doloremque reiciendis ea
        voluptatibus.
      </p>
    </div>
  </footer>
  <hr className="hr-two" />
  <p className="para">
    Copyright @ 2022 HuXn WebDev | Provided by <span>HuXn WebDev</span>
  </p>
</>
