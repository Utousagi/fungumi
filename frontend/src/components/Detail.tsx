import { Descriptions } from "@arco-design/web-react";

function Detail(props: { data: Object }) {
  console.log(props.data);
  var data = new Map(Object.entries(props.data));
  return (
    <Descriptions
      data={Array.from(data.entries()).map(([k, v]) => {
        return {
          label: k,
          value: v,
        };
      })}
      // data={[]}
      valueStyle={{ wordWrap: "break-word" }}
      column={1}
      border={false}
      tableLayout="fixed"
    />
  );
}

export default Detail;
