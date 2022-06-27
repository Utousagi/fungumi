import { Descriptions } from "@arco-design/web-react";

function Detail(props: { data: Map<string, string> }) {
  return (
    <Descriptions
      data={Array.from(props.data.entries()).map(([k, v]) => {
        return {
          label: k,
          value: v,
        };
      })}
      valueStyle={{ wordWrap: "break-word" }}
      column={1}
      border={false}
      tableLayout="fixed"
    />
  );
}

export default Detail;
