const dbc = require ('./dbc.js');

const getAll = async () => {
    let conn;
    try {
        console.log("GetAll Model");
        conn = await dbc.pool.getConnection();
        const rows = await conn.query("SELECT * from tbl_party WHERE `Delete` = 0;");
        return rows;
    } catch (err) {
        console.log(err);
    } finally {
        if (conn) 
            conn.end();
        }
    };

const create = async (party) => {
    let conn;
    try {
        conn = await dbc.pool.getConnection();
        conn.query("INSERT INTO tbl_party(Name, Ort, Anzahl_Leute, Zeitpunkt) VALUES(?, ?, ?, ?);", [party.name, party.ort, party.anzahl_leute, party.zeitpunkt]);
        return party;
    } catch (err) {
        console.log(err);
    } finally {
        if (conn) 
            conn.end();
        }
    };

const remove = async id => {
    let conn;
	try {
	  conn = await dbc.pool.getConnection();
	  const rows = await conn.query("UPDATE tbl_party SET `Delete` = 1 WHERE ID = ?;", id);
	  return rows;
	} catch (err) {
	  console.log(err);
	} finally {
	  if (conn) 
		   conn.end();
	  }
  };

module.exports = {
    getAll,
    create,
    remove,
    showData
}

function showData(rows){
    rows.forEach(element => {
        console.log(element['ID'] + ", " + element['Name']+ ", " + element['Ort']+ ", " + element['Anzahl_Leute']+ ", " + element['Zeitpunkt'] + ";");
    });
}