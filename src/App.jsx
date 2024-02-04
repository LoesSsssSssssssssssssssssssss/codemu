import './App.css';

function App() {
  const str1 = 'text1';
  const str2 = 'text2';

  const name = 'user';
  const age = '30';

  const arr = [1, 2, 3, 4, 5];

  const obj = { name: 'john', surname: 'smit' };

  const attr = 'block';

  const li1 = <li>text1</li>;
  const li2 = <li>text2</li>;
  const li3 = <li>text3</li>;

  const items = (
    <>
      <li>text1</li>
      <li>text2</li>
      <li>text3</li>
    </>
  );

  return (
    <>
      {/* <p className="text">abc</p>
      <p className="text">cba</p>
      <p className="text">bac</p> */}
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
      </ul>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <p>{str1}</p>
      <p>{str2}</p>
      <div>
        name: {name}
        age: {age}
      </div>
      <ul>
        <li>{arr[0]}</li>
        <li>{arr[1]}</li>
        <li>{arr[2]}</li>
        <li>{arr[3]}</li>
        <li>{arr[4]}</li>
      </ul>
      <p>
        name: <span>{obj.name}</span>, <br />
        surname: <span>{obj.surname}</span>,
      </p>
      <div id={attr}>text</div>
      <ul>
        {li1}
        {li2}
        {li3}
      </ul>
      <ul>{items}</ul>
      <div>
        text
        <input type="text" />
        <br />
        <input type="text" />
      </div>
      <table>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
      {1 + 2 + 'Hello'}
    </>
  );
}

export default App;
