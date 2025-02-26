import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomLoader, FormField } from "../components";
import { useStateContext } from "../context";
import { ethers } from "ethers";
import { checkIfImage } from "../utils";

const CreateCampaign: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleFormFieldChange = (
    fieldname: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [fieldname]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists: any) => {
      if (exists) {
        setIsLoading(true);
        await createCampaign({
          ...form,
          target: ethers.utils.parseUnits(form.target, 18).toString(),
        });
        setIsLoading(false);
        navigate("/");
      } else {
        alert("Provide valid image URL");
        setForm({ ...form, image: "" });
      }
    });

    //console.log(form);
  };
  return (
    <div className="min-h-screen text-white">
      {isLoading && <CustomLoader message="Creating campaign" />}
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold mb-6">Créer une Campagne</h1>
        <div className="bg-white text-dark-800 text-center py-4 rounded-lg">
          <h2 className="text-2xl font-bold">Start a campaign</h2>
        </div>

        <div className="glass-effect rounded-lg p-6 shadow-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                labelName="Ex: Your name"
                placeholder="Ex: John Doe"
                inputType="text"
                value={form.name}
                handleChange={(e: any) => {
                  handleFormFieldChange("name", e);
                }}
              />
              <FormField
                labelName="Ex: Campaign title"
                placeholder="Ex: Write a title"
                inputType="text"
                value={form.title}
                handleChange={(e: any) => {
                  handleFormFieldChange("title", e);
                }}
              />
            </div>
            <FormField
              labelName="Campaign description"
              placeholder="Tell us your story"
              isTextArea
              value={form.description}
              handleChange={(e: any) => {
                handleFormFieldChange("description", e);
              }}
            />

            <div className="bg-gradient-to-r from-white to-gray-300 text-dark-800 text-center py-4 rounded-lg shadow-lg">
              <h3 className="font-bold">
                You will get 100% of the raised amount
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                labelName="Goal"
                placeholder="ETH 0.00"
                inputType="number"
                value={form.target}
                handleChange={(e: any) => {
                  handleFormFieldChange("target", e);
                }}
              />
              <FormField
                labelName="End Date"
                placeholder="End Date"
                inputType="date"
                value={form.deadline}
                handleChange={(e: any) => {
                  handleFormFieldChange("deadline", e);
                }}
              />
            </div>
            <FormField
              labelName="Image cover"
              placeholder="https://example.com/image.jpg"
              inputType="url"
              value={form.image}
              handleChange={(e: any) => {
                handleFormFieldChange("image", e);
              }}
            />
            <button
              type="submit"
              className="w-full border border-gray-400 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-100 hover:text-dark-800 transition-colors duration-200"
            >
              Submit new campaign
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
