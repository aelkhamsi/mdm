import DivCircuitBg from "@/app/components/div-circuit-bg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@mdm/ui"
import { generalQuestions, mathSprintQuestions, bestMathVideoQuestions, standQuestions, conferencesQuestions } from "./questions"
import { FaqAccordion } from "./faq-accordion"


export default function ConferencesPage() {

  return (
    <DivCircuitBg classNameBgImage="opacity-50">
      <div className="w-full max-w-sm md:max-w-screen-md px-5 xl:px-0 space-y-6">
        <h1 className="text-center text-3xl font-bold drop-shadow-sm">
          <span className='bg-gradient-to-br from-sky-800 to-[#272162] inline-block text-transparent bg-clip-text'>FAQ</span>
        </h1>

        <p
          className="animate-fade-up bg-clip-text text-center font-display text-sm opacity-0"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Vous avez une question ? Veuillez lire les questions-réponses sur cette FAQ où vous allez trouver les réponses aux questions les plus posées par les participants de l&apos;édition précédente.
        </p>

        <p
          className="animate-fade-up bg-clip-text text-center font-display text-sm opacity-0"
          style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
        >
          Pour toute autre question non traitée sur le site vous pouvez nous contacter, via nos réseaux sociaux ou par email !<br/>
          Notez cependant que nous ne pourrons répondre qu&apos;aux questions non discutées sur le site.
        </p>

        <div
          className="animate-fade-up opacity-0"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Tabs defaultValue="general">
            <TabsList className="grid grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="general" className="text-sm">Général</TabsTrigger>
              <TabsTrigger value="math_sprint">Math Sprint</TabsTrigger>
              <TabsTrigger value="best_math_video">Best Math Video</TabsTrigger>
              <TabsTrigger value="stand">Stand</TabsTrigger>
              <TabsTrigger value="conferences">Conférences</TabsTrigger>
            </TabsList>

            <div className="mt-18 md:mt-0">
              <TabsContent value="general">
                <FaqAccordion items={generalQuestions} />
              </TabsContent>

              <TabsContent value="math_sprint">
                <FaqAccordion items={mathSprintQuestions} />
              </TabsContent>

              <TabsContent value="best_math_video">
                <FaqAccordion items={bestMathVideoQuestions} />
              </TabsContent>

              <TabsContent value="stand">
                <FaqAccordion items={standQuestions} />
              </TabsContent>

              <TabsContent value="conferences">
                <FaqAccordion items={conferencesQuestions} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </DivCircuitBg>
  )
}