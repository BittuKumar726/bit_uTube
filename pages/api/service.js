export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

export async function getStaticProps() {
  const res = await fetch(
    "https://eb69c8de-c627-47d4-b0bd-246d961cbfd3.mock.pstmn.io/youtube?class=10th&subject=Maths"
  );
  const data = await res.json();
  console.log("🚀 ~ file: service.js ~ line 10 ~ getStaticProps ~ data", data)

  return {
    props: {
      title: data.title,
      imageUrl: data.url,
    },
  };
}