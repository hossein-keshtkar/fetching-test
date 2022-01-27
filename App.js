import { View, Button, StyleSheet } from "react-native";

export default App = () => {
  /////////Learning Promise Usage////////////
  const hasMeeting = false;
  const meeting = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!hasMeeting) {
        const newMeeting = {
          time: "10:00 am",
          location: "the firm",
          person: "John Doe",
        };
        resolve(
          `A meeting with ${newMeeting.person} at ${newMeeting.location} on ${newMeeting.time} just schduled!`
        );
      } else {
        reject(new Error("You already have a meeting"));
      }
    }, 5000);
  });

  ////////first approach/////////
  // meeting
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  /////////second approach//////////
  /////async-await and try-catch/////
  // instead of all those .thens
  // we can use the following code

  async function doSomething() {
    try {
      const newMeeting = await meeting;
      console.log(newMeeting);
    } catch (err) {
      console.log(err);
    }
  }

  // ////////First approach => using .then()////////
  // function fetchData() {
  //   //By using fetch we will get a promise by default
  //   fetch("https://jsonplaceholder.cypress.io/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }

  // ///Second approach => using async-await & try-catch///
  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.cypress.io/todos/10"
      );
      const todo = await response.json();
      console.log(response.status);
      console.log(response.ok);
      console.log(todo);
    } catch (e) {
      console.log(response.status);
      console.log(response.ok);
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Button title="fetch" onPress={fetchData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "red",
    alignItems: "center",
    flex: 1,
  },
});
