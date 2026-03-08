import { ReadingTest } from "./reading-tests-data";

export const READING_TEST_21: ReadingTest = {
  id: 21,
  passages: [
    {
      title: "The History of Photography",
      text: `The invention of photography in the early nineteenth century was the culmination of centuries of experimentation with light, optics, and chemistry. Long before the first permanent photograph was produced, scholars and artists had observed that light passing through a small hole into a darkened room could project an inverted image of the outside scene onto the opposite wall. This phenomenon, known as the camera obscura, was described by the Arab scholar Ibn al-Haytham in the eleventh century and was widely used by Renaissance painters as an aid to accurate drawing.

The critical challenge that remained for centuries was finding a way to fix the projected image permanently. In 1826, the French inventor Joseph Nicéphore Niépce succeeded in producing the first known photograph, a view from his workshop window, using a pewter plate coated with bitumen of Judea. The exposure required approximately eight hours of direct sunlight, making the process entirely impractical for portraiture or any subject that moved. Niépce subsequently entered into a partnership with Louis Daguerre, a Parisian showman and painter, to refine the technique.

After Niépce's death in 1833, Daguerre continued experimenting and in 1839 announced the daguerreotype process, which reduced exposure times to just a few minutes and produced remarkably sharp, detailed images on polished silver plates. The French government purchased the rights to the invention and declared it a gift to the world, ensuring its rapid dissemination. Within months, daguerreotype studios appeared in cities across Europe and North America, and portraiture became the medium's primary commercial application.

Simultaneously, in England, William Henry Fox Talbot developed the calotype process, which used paper coated with silver iodide to produce a negative image from which multiple positive prints could be made. Unlike the daguerreotype, which produced a unique, non-reproducible image, Talbot's negative-positive system established the fundamental principle that would underpin photographic technology for the next century and a half. However, calotype images were softer and less detailed than daguerreotypes, and Talbot's decision to patent his process limited its adoption.

The introduction of the wet collodion process by Frederick Scott Archer in 1851 combined the sharpness of the daguerreotype with the reproducibility of the calotype. Glass plates coated with collodion and sensitised with silver nitrate produced exquisitely detailed negatives. The process was cumbersome, requiring photographers to prepare, expose, and develop plates while the collodion remained wet, but its superior quality made it the dominant photographic method for three decades.

Photography underwent its most transformative democratisation with the arrival of George Eastman's Kodak camera in 1888. Eastman's innovation was not primarily technical but commercial: he offered a simple, affordable box camera preloaded with a roll of flexible film sufficient for one hundred exposures. When the roll was finished, the customer mailed the entire camera to the Kodak factory, where the film was developed, prints were made, and the camera was reloaded and returned. The company's slogan, "You press the button, we do the rest," captured the revolutionary simplicity of the system.

The twentieth century brought a succession of advances that expanded photography's capabilities and accessibility. Colour film became commercially available in the 1930s with the introduction of Kodachrome by Eastman Kodak. The Polaroid instant camera, launched in 1948, eliminated the need for darkroom processing entirely. Single-lens reflex cameras offered greater creative control, while autofocus systems and built-in light meters simplified operation for amateur photographers. By the late twentieth century, digital sensors began replacing film, initiating a revolution that would make photography ubiquitous in the age of smartphones and social media.`,
      questions: [
        { number: 1, type: "multiple_choice", text: "What was the camera obscura primarily used for by Renaissance painters?", options: ["A. Projecting images for entertainment", "B. An aid to accurate drawing", "C. Studying the properties of light", "D. Creating permanent photographs"], correctAnswer: "B", explanation: "The passage states the camera obscura 'was widely used by Renaissance painters as an aid to accurate drawing'." },
        { number: 2, type: "multiple_choice", text: "Why was Niépce's first photograph considered impractical?", options: ["A. The image quality was poor", "B. The chemical process was dangerous", "C. The exposure required approximately eight hours", "D. The pewter plates were too expensive"], correctAnswer: "C", explanation: "The passage states the exposure 'required approximately eight hours of direct sunlight'." },
        { number: 3, type: "multiple_choice", text: "What distinguished Talbot's calotype from the daguerreotype?", options: ["A. It produced sharper images", "B. It was cheaper to produce", "C. It allowed multiple prints from one negative", "D. It required shorter exposure times"], correctAnswer: "C", explanation: "The calotype 'produce a negative image from which multiple positive prints could be made'." },
        { number: 4, type: "multiple_choice", text: "George Eastman's primary innovation was:", options: ["A. Inventing digital photography", "B. Developing colour film", "C. Creating a commercially simple camera system", "D. Improving lens technology"], correctAnswer: "C", explanation: "The passage says 'Eastman's innovation was not primarily technical but commercial'." },
        { number: 5, type: "true_false_not_given", text: "Ibn al-Haytham invented the camera obscura in the eleventh century.", correctAnswer: "Not Given", explanation: "The passage says he 'described' it, not that he invented it." },
        { number: 6, type: "true_false_not_given", text: "The French government made the daguerreotype process freely available to the public.", correctAnswer: "True", explanation: "The passage states the government 'declared it a gift to the world'." },
        { number: 7, type: "true_false_not_given", text: "Talbot's calotype images were sharper than daguerreotypes.", correctAnswer: "False", explanation: "The passage says calotype images 'were softer and less detailed than daguerreotypes'." },
        { number: 8, type: "true_false_not_given", text: "The wet collodion process was easier to use than the daguerreotype.", correctAnswer: "False", explanation: "The process is described as 'cumbersome'." },
        { number: 9, type: "true_false_not_given", text: "Kodachrome was the first colour film ever produced.", correctAnswer: "Not Given", explanation: "The passage says it 'became commercially available' but doesn't say it was the first ever produced." },
        { number: 10, type: "sentence_completion", text: "Niépce's first photograph was produced on a pewter plate coated with ________.", correctAnswer: "bitumen of Judea", explanation: "Directly stated in the passage." },
        { number: 11, type: "sentence_completion", text: "The wet collodion process used glass plates coated with collodion and sensitised with ________.", correctAnswer: "silver nitrate", explanation: "Directly stated in the passage." },
        { number: 12, type: "sentence_completion", text: "Eastman's Kodak camera was preloaded with a roll of flexible film for ________ exposures.", correctAnswer: "one hundred", explanation: "The passage states 'sufficient for one hundred exposures'." },
        { number: 13, type: "sentence_completion", text: "The Polaroid instant camera eliminated the need for ________ processing.", correctAnswer: "darkroom", explanation: "Directly stated in the passage." },
      ],
    },
    {
      title: "Urban Green Spaces",
      text: `Paragraph A
Urban green spaces — parks, gardens, tree-lined avenues, and other areas of vegetation within cities — have long been recognised as important features of the urban landscape. In recent decades, however, a growing body of scientific evidence has demonstrated that these spaces provide far more than aesthetic pleasure. They deliver measurable benefits to public health, environmental quality, social cohesion, and economic vitality, making them essential infrastructure rather than optional amenities.

Paragraph B
The health benefits of urban green spaces have been extensively documented. Studies conducted across multiple countries have found that residents living near parks and green areas report lower levels of stress, anxiety, and depression compared with those in neighbourhoods lacking such spaces. Research published in The Lancet demonstrated that access to green space reduces socioeconomic inequalities in health, with the greatest benefits observed among the most disadvantaged populations. Physical activity levels also increase significantly when safe, attractive green spaces are available within walking distance of residential areas.

Paragraph C
From an environmental perspective, urban vegetation plays a crucial role in mitigating the urban heat island effect — the phenomenon whereby cities are significantly warmer than surrounding rural areas due to the absorption and re-radiation of heat by buildings, roads, and other hard surfaces. Trees provide shade that can reduce surface temperatures by up to twenty degrees Celsius, while the process of evapotranspiration — the release of water vapour through leaves — cools the surrounding air. A mature tree can transpire hundreds of litres of water per day, providing a cooling effect equivalent to several domestic air conditioning units.

Paragraph D
Green spaces also contribute to urban flood management. In heavily paved cities, rainwater runs rapidly off impermeable surfaces into drainage systems, which can become overwhelmed during heavy rainfall, leading to flooding. Vegetated areas absorb and retain significant quantities of rainwater, reducing runoff volume and slowing the rate at which water enters drainage networks. Green roofs, rain gardens, and bioswales — shallow, vegetated channels designed to collect and filter stormwater — are increasingly incorporated into urban design as components of sustainable drainage systems.

Paragraph E
The social benefits of urban green spaces are perhaps less immediately obvious but no less significant. Parks and gardens serve as gathering places where people from diverse backgrounds can interact informally, fostering social connections and community identity. Research has shown that neighbourhoods with well-maintained green spaces experience lower rates of crime, partly because these areas encourage legitimate use of outdoor spaces, increasing natural surveillance. Community gardens, in particular, have been found to strengthen social networks and increase residents' sense of belonging and civic engagement.

Paragraph F
Despite the well-documented benefits, urban green spaces face significant threats in many cities around the world. Rapid urbanisation and rising land values create intense pressure to develop green areas for housing or commercial use. Maintenance budgets for public parks have been cut in numerous cities, leading to deterioration that discourages use and further undermines public support for investment. Climate change poses additional challenges, as rising temperatures, altered precipitation patterns, and increased frequency of extreme weather events stress urban vegetation and may render some species unsuitable for their current locations. Ensuring that cities retain and expand their green infrastructure will require sustained political commitment, innovative funding mechanisms, and adaptive management strategies that account for changing environmental conditions.`,
      questions: (() => {
        const headings = [
          "i. The cooling function of urban vegetation",
          "ii. Evidence linking green spaces to better health outcomes",
          "iii. Threats to the future of urban green spaces",
          "iv. Green spaces as essential urban infrastructure",
          "v. The role of vegetation in managing urban flooding",
          "vi. Economic benefits of parks for local businesses",
          "vii. How green spaces strengthen communities",
          "viii. Government regulations on urban park development",
        ];
        return [
          { number: 14, type: "matching_headings" as const, text: "Paragraph A", options: headings, correctAnswer: "iv", explanation: "Paragraph A describes green spaces as 'essential infrastructure rather than optional amenities'." },
          { number: 15, type: "matching_headings" as const, text: "Paragraph B", options: headings, correctAnswer: "ii", explanation: "Paragraph B discusses health studies and evidence." },
          { number: 16, type: "matching_headings" as const, text: "Paragraph C", options: headings, correctAnswer: "i", explanation: "Paragraph C focuses on trees' cooling effects through shade and evapotranspiration." },
          { number: 17, type: "matching_headings" as const, text: "Paragraph D", options: headings, correctAnswer: "v", explanation: "Paragraph D discusses flood management through vegetation." },
          { number: 18, type: "matching_headings" as const, text: "Paragraph E", options: headings, correctAnswer: "vii", explanation: "Paragraph E discusses social connections and community identity." },
          { number: 19, type: "matching_headings" as const, text: "Paragraph F", options: headings, correctAnswer: "iii", explanation: "Paragraph F discusses threats including urbanisation and climate change." },
          { number: 20, type: "summary_completion" as const, text: "Access to green space reduces socioeconomic ________ in health.", correctAnswer: "inequalities", explanation: "The passage states 'reduces socioeconomic inequalities in health'." },
          { number: 21, type: "summary_completion" as const, text: "Trees reduce surface temperatures by providing ________ and releasing water vapour.", correctAnswer: "shade", explanation: "The passage states 'Trees provide shade that can reduce surface temperatures'." },
          { number: 22, type: "summary_completion" as const, text: "Green roofs and rain gardens are components of sustainable ________ systems.", correctAnswer: "drainage", explanation: "Described as 'components of sustainable drainage systems'." },
          { number: 23, type: "summary_completion" as const, text: "Community gardens strengthen social networks and increase residents' sense of ________.", correctAnswer: "belonging", explanation: "The passage states 'increase residents' sense of belonging and civic engagement'." },
          { number: 24, type: "short_answer" as const, text: "What phenomenon causes cities to be warmer than surrounding rural areas?", correctAnswer: "urban heat island", explanation: "The passage describes the 'urban heat island effect'." },
          { number: 25, type: "short_answer" as const, text: "What are bioswales designed to collect and filter?", correctAnswer: "stormwater", explanation: "Bioswales are described as 'shallow, vegetated channels designed to collect and filter stormwater'." },
          { number: 26, type: "short_answer" as const, text: "What has been cut in numerous cities, leading to park deterioration?", correctAnswer: "maintenance budgets", explanation: "The passage states 'Maintenance budgets for public parks have been cut'." },
        ];
      })(),
    },
    {
      title: "Nanotechnology in Medicine",
      text: `Paragraph A
Nanotechnology, the manipulation of matter at the scale of one to one hundred nanometres, has emerged as one of the most transformative fields in modern medicine. At this scale — a nanometre is one billionth of a metre, roughly the width of three or four atoms — materials exhibit unique physical and chemical properties that differ substantially from their bulk counterparts. These distinctive properties have opened remarkable possibilities for diagnosing, treating, and preventing disease with a precision that was unimaginable just decades ago.

Paragraph B
One of the most promising applications of nanotechnology in medicine is targeted drug delivery. Conventional chemotherapy drugs, for example, circulate throughout the entire body, killing both cancerous and healthy cells indiscriminately and causing severe side effects including nausea, hair loss, and immune suppression. Nanoparticle-based drug delivery systems can be engineered to carry therapeutic agents directly to tumour sites while bypassing healthy tissue. This is achieved through several mechanisms, including the enhanced permeability and retention effect, whereby nanoparticles accumulate preferentially in tumour tissue because of its leaky blood vessels, and active targeting, in which the surface of nanoparticles is coated with molecules that bind specifically to receptors overexpressed on cancer cells.

Paragraph C
Diagnostic nanotechnology represents another rapidly advancing frontier. Quantum dots — semiconductor nanocrystals that emit light of specific wavelengths when excited — can be attached to antibodies or other targeting molecules to create highly sensitive imaging agents capable of detecting disease at its earliest stages. Gold nanoparticles have been developed into rapid diagnostic tests for infectious diseases, including point-of-care devices that deliver results within minutes without requiring laboratory equipment. Magnetic nanoparticles are being explored as contrast agents for magnetic resonance imaging, potentially offering resolution far superior to existing techniques.

Paragraph D
The field of nanomedicine has also produced significant advances in regenerative medicine. Nanostructured scaffolds — three-dimensional frameworks with features at the nanoscale — can mimic the extracellular matrix that normally supports cell growth and tissue organisation. Researchers have used such scaffolds to guide the regeneration of bone, cartilage, nerve tissue, and blood vessels in laboratory settings and, increasingly, in clinical trials. Nanofibre meshes have shown particular promise in wound healing, promoting faster tissue repair while reducing scarring.

Paragraph E
Despite its enormous potential, nanomedicine faces several significant challenges. The long-term safety of nanoparticles within the human body remains incompletely understood. Some studies have raised concerns that certain nanomaterials may accumulate in organs such as the liver and spleen, potentially causing toxicity over time. The interaction between nanoparticles and the immune system is complex and not yet fully characterised, with some materials provoking inflammatory responses. Regulatory frameworks for approving nanomedicine products are still evolving, as traditional testing protocols may not adequately assess the unique risks associated with nanoscale materials.

Paragraph F
Manufacturing consistency presents another obstacle. Producing nanoparticles with uniform size, shape, and surface properties at industrial scale remains technically challenging, yet such consistency is essential for ensuring that medical products perform predictably. Small variations in nanoparticle characteristics can significantly alter their behaviour in biological systems, affecting drug release rates, tissue distribution, and clearance from the body.

Paragraph G
The commercial landscape of nanomedicine is nevertheless expanding rapidly. As of 2023, more than fifty nanomedicine products had received regulatory approval worldwide, generating combined annual revenues exceeding twenty billion dollars. Lipid nanoparticles gained global prominence as the delivery vehicle for mRNA vaccines against COVID-19, demonstrating that nanotechnology could be deployed at unprecedented scale with remarkable speed. Ongoing research into nanorobots — microscopic machines capable of performing tasks within the body — represents perhaps the most ambitious vision for the field, though practical applications remain years or decades away.`,
      questions: [
        { number: 27, type: "matching_information", text: "A description of how nanoparticles reach tumour sites specifically", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "B", explanation: "Paragraph B describes the enhanced permeability and retention effect and active targeting." },
        { number: 28, type: "matching_information", text: "Concerns about nanoparticle accumulation in human organs", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "E", explanation: "Paragraph E discusses accumulation in the liver and spleen." },
        { number: 29, type: "matching_information", text: "The use of nanotechnology in COVID-19 vaccines", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "G", explanation: "Paragraph G mentions lipid nanoparticles in mRNA vaccines." },
        { number: 30, type: "matching_information", text: "The difficulty of producing uniform nanoparticles at large scale", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "F", explanation: "Paragraph F discusses manufacturing consistency challenges." },
        { number: 31, type: "matching_information", text: "Examples of nanoparticles used in medical imaging", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "C", explanation: "Paragraph C discusses quantum dots, gold nanoparticles, and magnetic nanoparticles for imaging." },
        { number: 32, type: "matching_information", text: "Applications of nanotechnology in tissue repair", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "D", explanation: "Paragraph D discusses nanostructured scaffolds for regenerating tissue." },
        { number: 33, type: "multiple_choice", text: "What is the approximate size range of nanotechnology?", options: ["A. 1 to 10 nanometres", "B. 1 to 100 nanometres", "C. 1 to 1,000 nanometres", "D. 10 to 500 nanometres"], correctAnswer: "B", explanation: "The passage defines it as 'one to one hundred nanometres'." },
        { number: 34, type: "multiple_choice", text: "Why does conventional chemotherapy cause severe side effects?", options: ["A. The drugs are too concentrated", "B. The drugs attack both cancerous and healthy cells", "C. The drugs are administered too frequently", "D. The drugs interact with the immune system"], correctAnswer: "B", explanation: "The passage says drugs 'kill both cancerous and healthy cells indiscriminately'." },
        { number: 35, type: "multiple_choice", text: "What are quantum dots?", options: ["A. Magnetic nanoparticles for MRI imaging", "B. Semiconductor nanocrystals that emit light", "C. Gold particles used in diagnostic tests", "D. Nanofibres used in wound healing"], correctAnswer: "B", explanation: "Defined as 'semiconductor nanocrystals that emit light of specific wavelengths'." },
        { number: 36, type: "multiple_choice", text: "How many nanomedicine products had received approval by 2023?", options: ["A. More than twenty", "B. More than thirty", "C. More than fifty", "D. More than one hundred"], correctAnswer: "C", explanation: "The passage states 'more than fifty nanomedicine products'." },
        { number: 37, type: "sentence_completion", text: "Nanoparticle-based drug delivery systems bypass healthy tissue and carry drugs directly to ________ sites.", correctAnswer: "tumour", explanation: "The passage states they 'carry therapeutic agents directly to tumour sites'." },
        { number: 38, type: "sentence_completion", text: "Nanostructured scaffolds mimic the ________ matrix that supports cell growth.", correctAnswer: "extracellular", explanation: "The passage describes scaffolds that 'mimic the extracellular matrix'." },
        { number: 39, type: "sentence_completion", text: "Nanofibre meshes promote faster tissue repair while reducing ________.", correctAnswer: "scarring", explanation: "The passage states they promote 'faster tissue repair while reducing scarring'." },
        { number: 40, type: "sentence_completion", text: "Lipid nanoparticles served as the delivery vehicle for ________ vaccines against COVID-19.", correctAnswer: "mRNA", explanation: "The passage states 'the delivery vehicle for mRNA vaccines against COVID-19'." },
      ],
    },
  ],
};
