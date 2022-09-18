const groupDate = (Todos) => {
  const Tasks = Todos.map(task => task.date);
  const result = Object.values(Tasks.reduce((r, e) => {
    let k = `${e.day}&${e.month}&${e.year}`;
    if (!r[k]) r[k] = { ...e, count: 1 }
    else r[k].count += 1;
    return r;
  }, {}));
  return result;
}

export default groupDate
