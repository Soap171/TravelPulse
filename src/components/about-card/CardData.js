function CardData(props) {
  return (
    <div class="card my-4">
      <img src={props.img} class="card-img-top" alt="img" />
      <div class="card-body">
        <p class="card-text">{props.txt}</p>
        <div className="text-start">
          <a
            href=""
            className="text-success opacity-75 text-decoration-none border-bottom border-2 border-success p-1"
          >
            <i class="fa-brands fa-blogger-b me-2"></i>Check out blog
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardData;
