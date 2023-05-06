import { Link, useRouteError } from "react-router-dom";

export function NotFound() {
  const error:any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <h1>Pagina não encontrada</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Voltar para home</Link>
    </div>
  );
}

