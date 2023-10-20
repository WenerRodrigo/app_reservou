import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "../../hooks/useAuth";
import theme from "../../theme";

const LogoutButton = () => {
  const { signOut } = useAuth();

  return (
    <TouchableOpacity onPress={signOut}>
      <Feather name="log-out" size={24} color={theme.colors.yellow} />
      <Text>Sair</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;