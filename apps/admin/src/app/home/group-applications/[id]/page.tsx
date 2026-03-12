"use client";

import { Label } from "@/components/shared/label";
import Separator from "@/components/shared/separator";
import { formatDate } from "@/lib/utils";
import { groupApplicationsState } from "@/store/groupApplicationsState";
import React, { ReactNode, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shared/tabs";
import { useRouter } from "next/navigation";
import { ExpandingArrow } from "@/components/shared/icons";
import ApplicationStatus from "../components/application-status";
import FilesTable from "./files-table";

const regionLabels = {
  "tanger-tetouan-al-houceima": "Tanger-Tétouan-Al Hoceïma",
  oriental: "Oriental",
  "fes-meknes": "Fès-Meknès",
  "rabat-sale-kenitra": "Rabat-Salé-Kénitra",
  "beni-mellal-khenifra": "Béni Mellal-Khénifra",
  "casablanca-settat": "Casablanca-Settat",
  "marrakech-safi": "Marrakech-Safi",
  "draa-tafilalet": "Drâa-Tafilalet",
  "souss-massa": "Souss-Massa",
  "guelmim-oued-noun": "Guelmim-Oued Noun",
  "laayoune-sakia-el-hamra": "Laâyoune-Sakia El Hamra",
  "dakhla-oued-eddahab": "Dakhla-Oued Eddahab",
  abroad: "Abroad",
} as any;

const educationLevelLabels: Record<string, string> = {
  ce6: "CE6",
  ce5: "CE5",
  ce4: "CE4",
  ce3: "CE3",
  ce2: "CE2",
  ce1: "CE1",
  "3ac": "3AC",
  "2ac": "2AC",
  "1ac": "1AC",
  "2bac": "2ème année Bac",
  "1bac": "1ère année Bac",
  "tronc-commun": "Tronc commun",
  university: "Université",
  cpge: "Classes Préparatoires",
  other: "Autre",
};

const functions: Record<string, string> = {
  director: "Directeur",
  professor: "Professeur",
  supervisor: "Surveillant",
};

const renderText = (value: any) => {
  return value ? value : <span className="text-gray-400">(empty)</span>;
};

const Field = ({ label, children }: { label: string; children: ReactNode }) => {
  return (
    <div>
      <Label className="text-[#272162] font-semibold">{label}</Label>
      <p>{children}</p>
    </div>
  );
};

export default function ApplicationDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const [applications, setApplications] = useRecoilState(
    groupApplicationsState,
  );
  const [application, setApplication] = useState<any>(undefined);
  const id = parseInt(params.id);
  const router = useRouter();

  useEffect(() => {
    if (applications) {
      const searchResult = applications.find(
        (application: any) => application?.id === id,
      );
      setApplication(searchResult);
    }
  }, [applications]);

  return (
    <>
      {application ? (
        <Tabs defaultValue="personal-informations" className="space-y-8">
          <div
            className="font-semibold flex cursor-pointer"
            onClick={() => router.push("/home/group-applications")}
          >
            <ExpandingArrow className="rotate-180 mr-2" /> {"  "} Back
          </div>

          <div className="font-semibold text-2xl flex justify-between">
            <div>
              Application of{" "}
              <span className="bg-gradient-to-br from-sky-800 to-[#272162] inline-block text-transparent bg-clip-text">
                {application?.firstName} {application?.lastName}
              </span>
            </div>

            <ApplicationStatus
              applicationId={application?.id}
              status={application?.status}
            />
          </div>

          <TabsList className="flex justify-start space-x-8 h-[4rem] bg-slate-200 text-black">
            <TabsTrigger
              value="personal-informations"
              className="text-base h-full"
            >
              Personal Informations
            </TabsTrigger>
            <TabsTrigger
              value="establishment-informations"
              className="text-base h-full"
            >
              Education
            </TabsTrigger>
            <TabsTrigger value="uploads" className="text-base h-full">
              Uploads
            </TabsTrigger>
          </TabsList>
          <Separator className="my-6" />

          {/* PERSONAL INFORMARIONS */}
          <TabsContent value="personal-informations">
            <div className="space-y-6">
              <Field label="First name">
                {renderText(application?.firstName)}
              </Field>
              <Field label="Last name">
                {renderText(application?.lastName)}
              </Field>
              <Field label="Date of birth">
                {renderText(formatDate(application?.dateOfBirth))}
              </Field>
              <Field label="CNIE number">
                {renderText(application?.identityCardNumber)}
              </Field>
              <Field label="City of residence">
                {renderText(application?.city)}
              </Field>
              <Field label="Region of residence">
                {renderText(regionLabels[application?.region])}
              </Field>
              <Field label="Phone number">
                {renderText(application?.phoneNumber)}
              </Field>
              <Field label="Function">
                {renderText(
                  functions[application?.function] ?? application?.function,
                )}
              </Field>
            </div>
          </TabsContent>

          {/* EDUCATION */}
          <TabsContent value="establishment-informations">
            <div className="space-y-6">
              <Field label="Establishment Name">
                {renderText(application?.establishmentName)}
              </Field>
              <Field label="Establishment City">
                {renderText(application?.establishmentCity)}
              </Field>
              <Field label="Establishment Level">
                {renderText(
                  educationLevelLabels[application?.establishmentLevel],
                )}
              </Field>
              <Field label="Nb of Participants">
                {renderText(application?.numberOfParticipants)}
              </Field>
            </div>
          </TabsContent>

          {/* UPLOADS */}
          <TabsContent value="uploads">
            <div className="md:flex space-y-4 md:space-x-4 md:space-y-0 mt-8">
              <FilesTable application={application} />
            </div>
          </TabsContent>
        </Tabs>
      ) : (
        <></>
      )}
    </>
  );
}
