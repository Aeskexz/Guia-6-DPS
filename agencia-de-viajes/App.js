import React, { useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from "react-native";

const App = () => {
  const [modalPlaya, setModalPlaya] = useState(false);
  const [modalPlatillo, setModalPlatillo] = useState(false);
  const [modalRuta, setModalRuta] = useState(false);

  return (
    <ScrollView>

      {/* Modal Actividades */}
      <Modal transparent={true} animationType="slide" visible={modalPlaya}
        onRequestClose={() => setModalPlaya(false)}>
        <View style={styles.vistaModal}>
          <View style={styles.modal}>
            <Text style={styles.subtitulo}>Ir a la playa</Text>
            <Text>El Salvador es conocido por sus hermosas playas a nivel Centroamérica.</Text>
            <Button title="Cerrar" onPress={() => setModalPlaya(false)} />
          </View>
        </View>
      </Modal>

      {/* Modal Platillos */}
      <Modal transparent={true} animationType="slide" visible={modalPlatillo}
        onRequestClose={() => setModalPlatillo(false)}>
        <View style={styles.vistaModal}>
          <View style={styles.modal}>
            <Text style={styles.subtitulo}>Platillos Típicos</Text>
            <Text>El Salvador es famoso por sus pupusas, reconocidas a nivel mundial.</Text>
            <Button title="Cerrar" onPress={() => setModalPlatillo(false)} />
          </View>
        </View>
      </Modal>

      {/* Modal Rutas */}
      <Modal transparent={true} animationType="slide" visible={modalRuta}
        onRequestClose={() => setModalRuta(false)}>
        <View style={styles.vistaModal}>
          <View style={styles.modal}>
            <Text style={styles.subtitulo}>Rutas Turísticas</Text>
            <Text>Explora las rutas turísticas más hermosas de El Salvador.</Text>
            <Button title="Cerrar" onPress={() => setModalRuta(false)} />
          </View>
        </View>
      </Modal>

      {/* Banner */}
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.banner} source={require("./assets/images/bg.jpg")} />
      </View>

      {/* Sección Actividades */}
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>¿Qué hacer en El Salvador?</Text>
        <ScrollView horizontal>
          <View>
            <TouchableHighlight onPress={() => setModalPlaya(true)}>
              <Image style={styles.ciudad} source={require("./assets/images/actividad1.jpg")} />
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight onPress={() => setModalPlaya(true)}>
              <Image style={styles.ciudad} source={require("./assets/images/actividad2.jpg")} />
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight onPress={() => setModalPlaya(true)}>
              <Image style={styles.ciudad} source={require("./assets/images/actividad3.jpg")} />
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight onPress={() => setModalPlaya(true)}>
              <Image style={styles.ciudad} source={require("./assets/images/actividad4.jpg")} />
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight onPress={() => setModalPlaya(true)}>
              <Image style={styles.ciudad} source={require("./assets/images/actividad5.jpg")} />
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>

      {/* Sección Platillos */}
      <Text style={styles.titulo}>Platillos Salvadoreños</Text>
      <TouchableHighlight onPress={() => setModalPlatillo(true)}>
        <Image style={styles.mejores} source={require("./assets/images/mejores1.jpg")} />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => setModalPlatillo(true)}>
        <Image style={styles.mejores} source={require("./assets/images/mejores2.jpg")} />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => setModalPlatillo(true)}>
        <Image style={styles.mejores} source={require("./assets/images/mejores3.jpg")} />
      </TouchableHighlight>

      {/* Sección Rutas */}
      <Text style={styles.titulo}>Rutas Turísticas</Text>
      <View style={styles.listado}>
        <TouchableHighlight style={styles.listaItem} onPress={() => setModalRuta(true)}>
          <Image style={styles.mejores} source={require("./assets/images/ruta1.jpg")} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.listaItem} onPress={() => setModalRuta(true)}>
          <Image style={styles.mejores} source={require("./assets/images/ruta2.jpg")} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.listaItem} onPress={() => setModalRuta(true)}>
          <Image style={styles.mejores} source={require("./assets/images/ruta3.jpg")} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.listaItem} onPress={() => setModalRuta(true)}>
          <Image style={styles.mejores} source={require("./assets/images/ruta4.jpg")} />
        </TouchableHighlight>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 100,
    marginRight: 10,
  },
  mejores: {
    width: "100%",
    height: 200,
    marginVertical: 10,
  },
  listaItem: {
    flexBasis: "49%",
  },
  listado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  vistaModal: {
    backgroundColor: "#000000aa",
    flex: 1,
  },
  modal: {
    backgroundColor: "#fff",
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default App;