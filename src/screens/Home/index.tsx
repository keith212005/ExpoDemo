import { resetNavigation } from "@navigator";
import { useNavigation } from "@react-navigation/core";
import { signOut } from "@services";
import { saveUserInfo } from "actions/saveUserInfo";
import { Text, View, StyleSheet, Button, Platform } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export const Home = (props: any) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: any) => state.userInfo);
  const navigation = useNavigation();

  if (Platform.OS === "web") {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
    });
  }

  const handleSignOut = () => {
    dispatch(saveUserInfo(""));
    signOut();
    resetNavigation("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>Username: {userInfo?.email}</Text>
      <Button title="Logout" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20 },
});
