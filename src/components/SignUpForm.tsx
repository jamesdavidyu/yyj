import {
  Box,
  Button,
  Center,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { hasLength, isEmail, useForm } from "@mantine/form";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";

interface SignUpFormProps {
  setIsLogin: (isLogin: boolean) => void;
}

interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpForm = ({ setIsLogin }: SignUpFormProps) => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      email: isEmail("Invalid email"),
      password: hasLength({ min: 8 }, "Must be at least 8 characters"),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords do not match" : null,
    },
  });

  const handleSignUp = useCallback(async (formValues: SignUpFormValues) => {
    try {
      await axios.post("/api/auth/register", formValues);

      await signIn("credentials", {
        redirect: false,
        callbackUrl: "/home",
        email: formValues.email,
        password: formValues.password,
      });
    } catch (e: any) {}
  }, []);

  const [signUp, setSignUp] = useState(true);

  const openSignUp = () => {
    setSignUp((prev) => !prev);
  };

  return (
    <Box>
      {signUp ? (
        <Box>
          <Text c="white" fw="bold" fz="xl">
            Don&#39;t have an account?
          </Text>
          <Center>
            <Button bg="red" onClick={openSignUp}>
              Sign Up
            </Button>
          </Center>
        </Box>
      ) : (
        <form onSubmit={form.onSubmit(handleSignUp)}>
          <TextInput
            placeholder="Email"
            {...form.getInputProps("email")}
            key={form.key("email")}
          />
          <br />
          <PasswordInput
            placeholder="Password"
            {...form.getInputProps("password")}
            key={form.key("password")}
          />
          <br />
          <PasswordInput
            placeholder="Confirm password"
            {...form.getInputProps("confirmPassword")}
            key={form.key("confirmPassword")}
          />
          <br />
          <Center>
            <Button bg="red" type="submit">
              Sign Up
            </Button>
          </Center>
        </form>
      )}
    </Box>
  );
};
