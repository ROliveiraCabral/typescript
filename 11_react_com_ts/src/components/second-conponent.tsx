type Props = {
  name: string;
};

const SecondComponent = (props: Props) => {
  return (
    <div>
      <p>Meu segundo conponente</p>
      <p>O nome dele é: {props.name}</p>
    </div>
  );
};

export default SecondComponent;
