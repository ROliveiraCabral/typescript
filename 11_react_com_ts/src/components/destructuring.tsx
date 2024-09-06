type Props = {
  title: string;
  content: string;
  comentQty: number;
  tags: string[];

  //8 - enum
  category: Category;
};

export enum Category {
  JS = "javascript",
  TS = "typescript",
  PY = "python",
}

const Destructuring = ({
  title,
  content,
  comentQty,
  tags,
  category,
}: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>Quantidade de comentários: {comentQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag} </span>
        ))}
      </div>
      <h4>Categoria: {category}</h4>
    </div>
  );
};

export default Destructuring;
