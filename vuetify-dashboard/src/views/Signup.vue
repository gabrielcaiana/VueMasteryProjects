<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Signup</h1>
        <v-form @submit.prevent="submit" ref="signUpForm" v-model="formValidity">
          <v-text-field
            label="Email"
            type="Email"
            v-model="email"
            :rules="emailRules"
            required
          >
          </v-text-field>
          <v-autocomplete
            label="witch browser do you use?"
            :items="browsers"
          ></v-autocomplete>
          <v-file-input label="Attach profile picture"></v-file-input>

          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="birthday"
                label="Birthday"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="birthday" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(birthday)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>

          <v-checkbox
            label="Agree to terms & conditions"
            v-model="agreeToTerms"
            :rules="agreeToTermsRules"
            required
          ></v-checkbox>
          <v-btn class="mr-4" type="submit" color="primary" :disabled="!formValidity">Submit</v-btn>
          <v-btn class="mr-4" color="success" @click="validateForm">Validate Form</v-btn>
          <v-btn class="mr-4" color="warning" @click="resetValidation"
            >Reset Validation</v-btn
          >
          <v-btn color="error" @click="resetForm">Reset</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    agreeToTerms: false,
    agreeToTermsRules: [
      (value) =>
        !!value ||
        "You must to the terms and conditions to sign up for an account.",
    ],
    email: "",
    emailRules: [
      (value) => !!value || "Email is required.",
      (value) => value.indexOf("@") !== 0 || "Email should have a username.",
      (value) => value.includes("@") || "Email should include an @ symbol.",
      (value) =>
        value.indexOf(".") - value.indexOf("@") > 1 ||
        "Email should contain a valid domain",
      (value) =>
        value.indexOf(".") <= value.length - 3 ||
        "Email should contain a valid domain extension",
    ],
    browsers: ["Chrome", "Firefox", "Safari", "Edge", "Brave"],
    formValidity: false,
    birthday: "",
    modal: false,
  }),

  methods: {
    submit() {
      alert("Hello world");
    },

    resetForm() {
      this.$refs.signUpForm.reset();
    },

    resetValidation() {
      this.$refs.signUpForm.resetValidation();
    },

    validateForm() {
        this.$refs.signUpForm.validate()
    }
  },
};
</script>

<style lang="scss" scoped></style>
