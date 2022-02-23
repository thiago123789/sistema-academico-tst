
var Horario = (props) => {
    return(
        <div>
            <div>Professor: { props.data.nome_professor }</div>
            <table>
                <thead>
                    <tr>
                        <td></td>
                        {
                            
                            props.data.dias_horarios.map(item => {
                                return (
                                    <td key={item.dia}>{item.dia}</td>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.dias_horarios.map((item, index_dia) => {
                            console.log(item)
                            return item.horario.map((hour, index_horario) => {
                                return (
                                    <tr>
                                        {
                                            index_dia === 0 &&
                                            <td key={hour+index_horario}>{hour.hora}</td>
                                        }
                                        {
                                            item.horario.map((houri, index_i) => {
                                                console.log(item,hour,houri, index_i, index_dia, index_horario, index_dia==0)
                                                if (true) {
                                                    return (<td><input type="checkbox" value={houri.disponivel}/></td>)
                                                }
                                            })
                                        }
                                    </tr>
                                )
                            })
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Horario;