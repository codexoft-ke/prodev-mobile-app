import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { styles } from "@/styles/_join";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function Join() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.iconsection}>
        <TouchableOpacity>
          <Text>←</Text>
        </TouchableOpacity>
        <Image source={HEROLOGOGREEN} style={{ width: 40, height: 40 }} />
        <View style={{ width: 24 }} />
      </View>

      {/* Title Section */}
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create Account</Text>
        <Text style={styles.subText}>Join us and start your journey</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Full Name</Text>
          <TextInput
            style={styles.formControl}
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.formControl}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              style={styles.passwordControl}
              placeholder="Create a password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text>{showPassword ? "👁️" : "👁️‍🗨️"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Primary Button */}
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      {/* Secondary Buttons */}
      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity
          style={[styles.secondaryButton, { borderColor: "#E9E9E9" }]}
        >
          <Image source={GOOGLELOGO} style={{ width: 24, height: 24 }} />
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.secondaryButton, { borderColor: "#E9E9E9" }]}
        >
          <Image source={FACEBOOKLOGO} style={{ width: 24, height: 24 }} />
          <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Link */}
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signupSubTitleText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
