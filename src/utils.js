const table = () => {
  return (
    <table border={1} cellPadding={12} width={"100%"}>
      <tr>
        <th>Property</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>Status: </td>
        <td>{phonebook.status}</td>
      </tr>
      <tr>
        <td>Msg Type:</td>
        <td>{phonebook.msgType}</td>
      </tr>
      <tr>
        <td>Msg:</td>
        <td>{phonebook.msg}</td>
      </tr>
    </table>
  );
};

export default table;
