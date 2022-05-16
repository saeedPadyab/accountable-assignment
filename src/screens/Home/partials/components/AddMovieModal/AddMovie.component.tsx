//@ts-nocheck
import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@core/components/molecules/Modal";

import Form from "@core/components/atoms/Form";
import Input from "@core/components/atoms/Input";
import Text from "@core/components/atoms/Text";
import Button from "@core/components/atoms/Button";
import Select from "@core/components/atoms/Select";
import useApp from "@core/contexts/App/useApp";
import { isInTheFuture, isInLastTwoMonths } from "@core/utils/date";
import { MovieEnumFilters } from "@core/types";
import useTranslation from "@core/hooks/useTranslation";

interface IModalProps {
  onClose: Function;
}

const averages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const AddMovieModal: React.FC<IModalProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const { addMovie } = useApp();
  let schema = yup.object().shape({
    title: yup.string().required().max(50),
    poster_path: yup.string().required(),
    voteCount: yup.number().positive(),
    release_date: yup.string().required(),
    voteAverage: yup.string().required(),
  });

  const fields = React.useMemo(
    () => [
      {
        name: "title",
        placeholder: t("title_placeholder"),
        maxLength: 50,
        required: true,
        helper: t("title_helper"),
      },
      {
        name: "poster_path",
        placeholder: t("poster_placeholder"),
        required: true,
        helper: t("poster_helper"),
      },
      {
        name: "release_date",
        required: true,
        placeholder: t("releaseDate_placeholder"),
        helper: t("releaseDate_helper"),
        type: "date",
      },
      {
        name: "voteCount",
        placeholder: t("voteCount_placeholder"),
        type: "number",
        helper: t("voteCount_helper"),
      },
      {
        name: "voteAverage",
        helper: t("voteAverage_helper"),
        component: (props) => (
          <Select {...props}>
            {averages.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </Select>
        ),
      },
      {
        name: "overview",
        placeholder: t("overview_placeholder"),
        maxLength: 400,
        helper: t("overview_helper"),
      },
    ],
    []
  );
  return (
    <Modal>
      <Formik
        initialValues={{
          id: Math.random().toString(),
          title: "",
          poster: "",
          release_date: "",
          voteAverage: 1,
          overview: "",
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          const movieObj = { ...values, isAddedLocally: true };
          if (movieObj.voteAverage > 8) {
            addMovie(movieObj, MovieEnumFilters.top);
          }
          if (isInTheFuture(new Date(movieObj.release_date))) {
            addMovie(movieObj, MovieEnumFilters.upcoming);
          }
          if (isInLastTwoMonths(new Date(movieObj.release_date))) {
            addMovie(movieObj, MovieEnumFilters.nowPlaying);
          }
          onClose();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
          dirty,
        }) => (
          <>
            <ModalHeader title="Create movie" onClose={onClose} />
            <ModalBody>
              <Form
                id="createMovieForm"
                css={{
                  width: "100%",
                }}
                onSubmit={handleSubmit}
              >
                {fields.map(({ component, ...restProps }) => {
                  const Cmp = component || Input;
                  const { name } = restProps;
                  return (
                    <Cmp
                      key={name}
                      {...restProps}
                      value={values[name]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isError={errors[name] && touched[name]}
                      errorMessage={errors[name]}
                    />
                  );
                })}
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button
                type="submit"
                form="createMovieForm"
                size="2"
                variant="primary"
                css={{ ml: "auto" }}
                disabled={!isValid || isSubmitting || !dirty}
              >
                <Text>Submit</Text>
              </Button>
            </ModalFooter>
          </>
        )}
      </Formik>
    </Modal>
  );
};

export default AddMovieModal;
