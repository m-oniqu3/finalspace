interface Props {
  text: string;
}

const Pill = (props: Props) => {
  const { text } = props;
  return (
    <p className="font-light rounded-md bg-indigo-100 py-1.5 px-5 border border-indigo-300 min-w-fit">
      {text}
    </p>
  );
};

export default Pill;
