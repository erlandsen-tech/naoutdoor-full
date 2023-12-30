/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getMember } from "../graphql/queries";
import { updateMember } from "../graphql/mutations";
const client = generateClient();
export default function MemberUpdateForm(props) {
  const {
    id: idProp,
    member: memberModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    homeGroup: "",
    cleanDate: "",
    email: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [homeGroup, setHomeGroup] = React.useState(initialValues.homeGroup);
  const [cleanDate, setCleanDate] = React.useState(initialValues.cleanDate);
  const [email, setEmail] = React.useState(initialValues.email);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = memberRecord
      ? { ...initialValues, ...memberRecord }
      : initialValues;
    setName(cleanValues.name);
    setHomeGroup(cleanValues.homeGroup);
    setCleanDate(cleanValues.cleanDate);
    setEmail(cleanValues.email);
    setErrors({});
  };
  const [memberRecord, setMemberRecord] = React.useState(memberModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getMember.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMember
        : memberModelProp;
      setMemberRecord(record);
    };
    queryData();
  }, [idProp, memberModelProp]);
  React.useEffect(resetStateValues, [memberRecord]);
  const validations = {
    name: [{ type: "Required" }],
    homeGroup: [],
    cleanDate: [],
    email: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          homeGroup: homeGroup ?? null,
          cleanDate: cleanDate ?? null,
          email,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateMember.replaceAll("__typename", ""),
            variables: {
              input: {
                id: memberRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "MemberUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              homeGroup,
              cleanDate,
              email,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Home group"
        isRequired={false}
        isReadOnly={false}
        value={homeGroup}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              homeGroup: value,
              cleanDate,
              email,
            };
            const result = onChange(modelFields);
            value = result?.homeGroup ?? value;
          }
          if (errors.homeGroup?.hasError) {
            runValidationTasks("homeGroup", value);
          }
          setHomeGroup(value);
        }}
        onBlur={() => runValidationTasks("homeGroup", homeGroup)}
        errorMessage={errors.homeGroup?.errorMessage}
        hasError={errors.homeGroup?.hasError}
        {...getOverrideProps(overrides, "homeGroup")}
      ></TextField>
      <TextField
        label="Clean date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={cleanDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              homeGroup,
              cleanDate: value,
              email,
            };
            const result = onChange(modelFields);
            value = result?.cleanDate ?? value;
          }
          if (errors.cleanDate?.hasError) {
            runValidationTasks("cleanDate", value);
          }
          setCleanDate(value);
        }}
        onBlur={() => runValidationTasks("cleanDate", cleanDate)}
        errorMessage={errors.cleanDate?.errorMessage}
        hasError={errors.cleanDate?.hasError}
        {...getOverrideProps(overrides, "cleanDate")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              homeGroup,
              cleanDate,
              email: value,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || memberModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || memberModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
