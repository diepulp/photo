type params = {
  params: { id: string };
};
export default function Note({ params }: params) {
  return <p>{params.id}</p>;
}
