import { FeatureBox } from "@/elements/FeatureBox";
import { Zap } from "lucide-react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { motion } from "framer-motion";
import ImagenesContent from "./ImagenesContent";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Props {
  title: string;
  subtitle: string;
  urlVideo: string;
  urlImagen: string;
  nombreVideo: string;
  direccion?: string;
  esSoloImagenes?: boolean;
  features?: Feature[];
}

export const SectionProcesos = ({
  title,
  subtitle,
  urlVideo,
  urlImagen,
  nombreVideo,
  direccion,
  esSoloImagenes,
  features = [],
}: Props) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 },
    },
  };

  const sectionVariants2 = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.8 },
    },
  };

  const featureBoxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 },
    }),
  };

  return (
    <motion.section
      className="w-full py-20 bg-gradient-to-t from-[#202b3135] via-[#202b31] to-[#202b313d]"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <motion.div
        className="w-full px-4"
        variants={sectionVariants}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center justify-between lg:flex-row">
          {direccion === "izquierda" ? (
            <>
              {/* Título y Subtítulo */}
              <motion.div
                className="mb-10 lg:w-1/2 lg:mb-0"
                variants={sectionVariants}
              >
                <div className="flex items-center mb-4">
                  <Zap className="mr-2 text-[rgb(123,210,225)]" />
                  <span className="text-[rgb(123,210,225)]">Empieza en minutos</span>
                </div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  {title} <span className="text-gray-500">{subtitle}</span>
                </h2>
              </motion.div>

              {/* Imagen o Video */}
              <motion.div className="lg:w-1/2" variants={sectionVariants2}>
                <div className="p-1 rounded-lg">
                  {!esSoloImagenes ? (
                    <HeroVideoDialog
                      className="block dark:hidden"
                      animationStyle="from-center"
                      videoSrc={urlVideo}
                      thumbnailSrc={urlImagen}
                      thumbnailAlt={nombreVideo}
                    />
                  ) : (
                    <ImagenesContent />
                  )}
                </div>
              </motion.div>
            </>
          ) : (
            <>
              {/* Imagen o Video */}
              <motion.div className="lg:w-1/2" variants={sectionVariants2}>
                <div className="p-1 rounded-lg">
                  {!esSoloImagenes ? (
                    <HeroVideoDialog
                      className="block dark:hidden"
                      animationStyle="from-center"
                      videoSrc={urlVideo}
                      thumbnailSrc={urlImagen}
                      thumbnailAlt={nombreVideo}
                    />
                  ) : (
                    <ImagenesContent />
                  )}
                </div>
              </motion.div>

              {/* Título y Subtítulo */}
              <motion.div
                className="mb-10 lg:w-1/2 lg:mb-0 lg:ml-8"
                variants={sectionVariants}
              >
                <div className="flex items-center mb-4">
                  <Zap className="mr-2 text-[rgb(123,210,225)]" />
                  <span className="text-[rgb(123,210,225)]">Empieza en minutos</span>
                </div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  {title} <span className="text-gray-500">{subtitle}</span>
                </h2>
              </motion.div>
            </>
          )}
        </div>

        {/* Feature Boxes */}
        {direccion == "izquierda" && (
          <motion.div className="grid grid-cols-1 gap-8 mt-20 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={featureBoxVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
              >
                <FeatureBox
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
};
