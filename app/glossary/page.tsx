"use client";

import Link from "next/link";
import { useLanguage } from "../components/i18n/language-context";
import type { Locale } from "../components/i18n/translations";

/* ─── Inline translations for glossary-specific related links ─── */
const relatedLinks: Record<Locale, { href: string; label: string }[]> = {
  en: [
    { href: "/product", label: "Explore the Product" },
    { href: "/features", label: "See All Features" },
    { href: "/faq", label: "Read the FAQ" },
  ],
  es: [
    { href: "/product", label: "Explorar el producto" },
    { href: "/features", label: "Ver todas las funciones" },
    { href: "/faq", label: "Leer las preguntas frecuentes" },
  ],
  fr: [
    { href: "/product", label: "Explorer le produit" },
    { href: "/features", label: "Voir toutes les fonctionnalités" },
    { href: "/faq", label: "Lire la FAQ" },
  ],
  pt: [
    { href: "/product", label: "Explorar o produto" },
    { href: "/features", label: "Ver todas as funcionalidades" },
    { href: "/faq", label: "Ler as perguntas frequentes" },
  ],
  it: [
    { href: "/product", label: "Esplora il prodotto" },
    { href: "/features", label: "Vedi tutte le funzionalità" },
    { href: "/faq", label: "Leggi le FAQ" },
  ],
};

/* ─── Glossary Terms ─── */

type GlossaryTerm = {
  id: string;
  term: string;
  definition: string;
  link?: { href: string; label: string };
};

const glossaryTerms: Record<Locale, GlossaryTerm[]> = {
  /* ────────────────────────────── ENGLISH ────────────────────────────── */
  en: [
    {
      id: "acoustic-model",
      term: "Acoustic Model",
      definition:
        "An acoustic model is a component of speech recognition systems that maps audio signals to phonetic units. Trained on large datasets of speech, it learns the relationship between sound waves and the sounds of a language. Acoustic models are foundational to accurate audio-to-text conversion and are continuously refined to handle diverse accents and noisy environments.",
    },
    {
      id: "action-plan-generation",
      term: "Action Plan Generation",
      definition:
        "Action plan generation is the AI-driven process of analyzing a conversation and producing a structured plan with clear steps, responsibilities, and timelines. It automatically extracts commitments and decisions from meetings and organizes them into a followable roadmap — eliminating the need for manual post-meeting planning.",
      link: { href: "/features/action-plans", label: "See Action Plans feature" },
    },
    {
      id: "audio-intelligence",
      term: "Audio Intelligence",
      definition:
        "Audio intelligence is the use of AI and machine learning to extract meaningful, structured information from audio recordings. It goes beyond simple transcription to understand context, identify speakers, detect sentiment, and generate actionable outputs like summaries, tasks, and action plans from spoken content.",
      link: { href: "/product", label: "Explore Sythio's audio intelligence" },
    },
    {
      id: "audio-library",
      term: "Audio Library",
      definition:
        "An audio library is a searchable, organized collection of processed audio recordings and their generated outputs. It allows users to revisit, search, and retrieve past recordings, transcripts, summaries, and extracted information — turning audio history into a valuable, always-accessible knowledge base.",
      link: { href: "/product", label: "Explore the Sythio library" },
    },
    {
      id: "audio-processing-pipeline",
      term: "Audio Processing Pipeline",
      definition:
        "An audio processing pipeline is the sequence of stages an audio recording passes through to produce final outputs. A typical pipeline includes noise reduction, voice activity detection, transcription, speaker diarization, NLP analysis, and output generation — each stage building on the previous one to deliver accurate, structured results.",
    },
    {
      id: "audio-summarization",
      term: "Audio Summarization",
      definition:
        "Audio summarization uses AI to condense a long audio recording into a brief, coherent summary that captures the essence of the conversation. Rather than reading an entire transcript, users receive the most important points in a concise format — saving significant time while preserving critical information.",
      link: { href: "/features/ai-summaries", label: "See AI Summaries feature" },
    },
    {
      id: "audio-to-text",
      term: "Audio-to-Text",
      definition:
        "Audio-to-text refers to the broad category of technologies that convert audio recordings into written text. This encompasses basic transcription, but also includes more advanced transformations like summarization, task extraction, and multi-format structured output generation from audio sources.",
      link: { href: "/product", label: "See Sythio's audio-to-text capabilities" },
    },
    {
      id: "clean-text-processing",
      term: "Clean Text Processing",
      definition:
        "Clean text processing transforms raw, verbatim transcription into polished, readable prose. It removes filler words (um, uh), false starts, repetitions, and grammatical artifacts of speech while preserving the original meaning — producing text that reads as naturally as if it had been written.",
      link: { href: "/features/clean-text", label: "See Clean Text feature" },
    },
    {
      id: "export-formats",
      term: "Export Formats",
      definition:
        "Export formats are the file types and structures available for saving and sharing processed audio outputs. Common formats include plain text, PDF, Markdown, and structured data — allowing users to integrate audio intelligence results into their existing workflows, documents, and collaboration tools.",
      link: { href: "/pricing", label: "See export options by plan" },
    },
    {
      id: "key-points-extraction",
      term: "Key Points Extraction",
      definition:
        "Key points extraction identifies and highlights the most important ideas, decisions, and facts from an audio recording. It distills lengthy conversations into a scannable list of essential takeaways, helping users quickly understand what matters without listening to or reading the full content.",
      link: { href: "/features/key-points", label: "See Key Points feature" },
    },
    {
      id: "language-model",
      term: "Language Model",
      definition:
        "A language model is an AI system that predicts the probability of word sequences, helping speech recognition choose the most likely transcription. In audio intelligence, language models also power the generation of summaries, action plans, and other structured outputs by understanding the meaning and context of transcribed text.",
    },
    {
      id: "meeting-notes",
      term: "Meeting Notes",
      definition:
        "Meeting notes are structured records of what was discussed, decided, and assigned during a meeting. AI-powered meeting notes go beyond manual note-taking by automatically capturing key points, action items, and speaker-attributed summaries from recorded conversations — ensuring nothing important is missed.",
      link: { href: "/use-cases", label: "See meeting use cases" },
    },
    {
      id: "multi-output-transformation",
      term: "Multi-output Transformation",
      definition:
        "Multi-output transformation is the ability to generate multiple structured formats from a single audio input in one processing step. Instead of only a transcript, the system simultaneously creates summaries, key points, tasks, action plans, reports, and more — maximizing the value extracted from every recording.",
      link: { href: "/features", label: "See all output formats" },
    },
    {
      id: "natural-language-processing",
      term: "Natural Language Processing (NLP)",
      definition:
        "Natural Language Processing (NLP) is a branch of artificial intelligence that enables computers to understand, interpret, and generate human language. In audio intelligence, NLP powers the understanding layer — analyzing transcribed text to extract meaning, sentiment, topics, tasks, and structured information from conversations.",
    },
    {
      id: "real-time-transcription",
      term: "Real-time Transcription",
      definition:
        "Real-time transcription converts speech to text as it is being spoken, with minimal latency. Unlike batch transcription that processes a completed recording, real-time transcription streams results within seconds — enabling live captions, instant meeting notes, and immediate documentation of spoken content.",
    },
    {
      id: "speaker-attribution",
      term: "Speaker Attribution",
      definition:
        "Speaker attribution assigns each spoken statement to the correct speaker in a multi-person conversation. It combines speaker diarization with contextual understanding to label who said what, enabling features like per-speaker summaries, accurate task assignment, and clear accountability in meeting records.",
      link: { href: "/features/speaker-detection", label: "See Speaker Detection feature" },
    },
    {
      id: "speaker-detection",
      term: "Speaker Detection",
      definition:
        "Speaker detection is the ability to identify and distinguish between different speakers in an audio recording. It automatically recognizes when a new person is talking, attributes statements to the correct speaker, and uses that context to produce smarter outputs like assigning tasks to the right person.",
      link: { href: "/features/speaker-detection", label: "See Speaker Detection feature" },
    },
    {
      id: "speaker-diarization",
      term: "Speaker Diarization",
      definition:
        "Speaker diarization is the process of partitioning an audio stream into segments according to who is speaking. It answers the question 'who spoke when?' by detecting speaker changes and grouping speech segments by individual voices — even without prior knowledge of who the speakers are.",
      link: { href: "/features/speaker-detection", label: "See Speaker Detection feature" },
    },
    {
      id: "speech-to-text",
      term: "Speech-to-Text",
      definition:
        "Speech-to-text (STT), also known as automatic speech recognition (ASR), is the technology that converts human speech into written words. Modern STT systems use deep neural networks to achieve high accuracy across diverse accents, vocabularies, and acoustic environments.",
    },
    {
      id: "task-extraction",
      term: "Task Extraction",
      definition:
        "Task extraction is the automated identification and listing of action items, to-dos, and assignments from spoken conversations. AI analyzes the context of what was said to determine which statements represent tasks, who is responsible, and what deadlines were mentioned — turning talk into trackable work.",
      link: { href: "/features/task-extraction", label: "See Task Extraction feature" },
    },
    {
      id: "transcription",
      term: "Transcription",
      definition:
        "Transcription is the process of converting spoken language in an audio recording into written text. Modern AI-powered transcription uses deep learning models to achieve high accuracy across accents, languages, and noisy environments — producing a complete text record of everything that was said.",
    },
    {
      id: "voice-activity-detection",
      term: "Voice Activity Detection (VAD)",
      definition:
        "Voice Activity Detection (VAD) is a signal processing technique that determines whether a given segment of audio contains human speech or silence and background noise. VAD is a critical preprocessing step in audio pipelines, improving transcription accuracy and reducing processing time by filtering out non-speech segments.",
    },
    {
      id: "voice-fingerprint",
      term: "Voice Fingerprint / Voiceprint",
      definition:
        "A voice fingerprint (or voiceprint) is a unique digital representation of an individual's voice characteristics, including pitch, tone, cadence, and speech patterns. Voiceprints are used in speaker identification and verification systems to recognize specific individuals across multiple recordings.",
    },
    {
      id: "voice-notes",
      term: "Voice Notes",
      definition:
        "Voice notes are short audio recordings used to capture thoughts, ideas, reminders, or information on the go. In the context of audio intelligence, voice notes are transformed by AI into structured text outputs — summaries, tasks, or organized notes — making spoken ideas instantly actionable and searchable.",
      link: { href: "/product", label: "See how Sythio transforms voice notes" },
    },
    {
      id: "word-error-rate",
      term: "Word Error Rate (WER)",
      definition:
        "Word Error Rate (WER) is the standard metric for measuring transcription accuracy. It calculates the percentage of words incorrectly transcribed — including substitutions, insertions, and deletions — compared to a reference transcript. Lower WER indicates higher accuracy; state-of-the-art systems achieve WER below 5%.",
    },
  ],

  /* ────────────────────────────── SPANISH ────────────────────────────── */
  es: [
    {
      id: "acoustic-model",
      term: "Modelo acústico",
      definition:
        "Un modelo acústico es un componente de los sistemas de reconocimiento de voz que asocia señales de audio con unidades fonéticas. Entrenado con grandes conjuntos de datos de habla, aprende la relación entre las ondas sonoras y los sonidos de un idioma. Los modelos acústicos son fundamentales para la conversión precisa de audio a texto y se perfeccionan continuamente para manejar diversos acentos y entornos ruidosos.",
    },
    {
      id: "action-plan-generation",
      term: "Generación de planes de acción",
      definition:
        "La generación de planes de acción es el proceso impulsado por IA que analiza una conversación y produce un plan estructurado con pasos claros, responsabilidades y plazos. Extrae automáticamente compromisos y decisiones de las reuniones y los organiza en una hoja de ruta ejecutable, eliminando la necesidad de planificación manual posterior a la reunión.",
      link: { href: "/features/action-plans", label: "Ver función de planes de acción" },
    },
    {
      id: "audio-intelligence",
      term: "Inteligencia de audio",
      definition:
        "La inteligencia de audio es el uso de IA y aprendizaje automático para extraer información significativa y estructurada de grabaciones de audio. Va más allá de la simple transcripción para comprender el contexto, identificar hablantes, detectar sentimientos y generar resultados accionables como resúmenes, tareas y planes de acción a partir de contenido hablado.",
      link: { href: "/product", label: "Explorar la inteligencia de audio de Sythio" },
    },
    {
      id: "audio-library",
      term: "Biblioteca de audio",
      definition:
        "Una biblioteca de audio es una colección organizada y buscable de grabaciones de audio procesadas y sus resultados generados. Permite a los usuarios revisitar, buscar y recuperar grabaciones anteriores, transcripciones, resúmenes e información extraída, convirtiendo el historial de audio en una base de conocimientos valiosa y siempre accesible.",
      link: { href: "/product", label: "Explorar la biblioteca de Sythio" },
    },
    {
      id: "audio-processing-pipeline",
      term: "Pipeline de procesamiento de audio",
      definition:
        "Un pipeline de procesamiento de audio es la secuencia de etapas por las que pasa una grabación de audio para producir resultados finales. Un pipeline típico incluye reducción de ruido, detección de actividad vocal, transcripción, diarización de hablantes, análisis de PLN y generación de resultados, donde cada etapa se basa en la anterior para ofrecer resultados precisos y estructurados.",
    },
    {
      id: "audio-summarization",
      term: "Resumen de audio",
      definition:
        "El resumen de audio utiliza IA para condensar una grabación larga en un resumen breve y coherente que captura la esencia de la conversación. En lugar de leer una transcripción completa, los usuarios reciben los puntos más importantes en un formato conciso, ahorrando tiempo significativo y preservando la información crítica.",
      link: { href: "/features/ai-summaries", label: "Ver función de resúmenes con IA" },
    },
    {
      id: "audio-to-text",
      term: "Audio a texto",
      definition:
        "Audio a texto se refiere a la amplia categoría de tecnologías que convierten grabaciones de audio en texto escrito. Esto incluye la transcripción básica, pero también transformaciones más avanzadas como resúmenes, extracción de tareas y generación de resultados estructurados en múltiples formatos a partir de fuentes de audio.",
      link: { href: "/product", label: "Ver las capacidades de audio a texto de Sythio" },
    },
    {
      id: "clean-text-processing",
      term: "Procesamiento de texto limpio",
      definition:
        "El procesamiento de texto limpio transforma la transcripción cruda y literal en prosa pulida y legible. Elimina muletillas (eh, este), inicios falsos, repeticiones y artefactos gramaticales del habla, preservando el significado original y produciendo un texto que se lee tan naturalmente como si hubiera sido escrito.",
      link: { href: "/features/clean-text", label: "Ver función de texto limpio" },
    },
    {
      id: "export-formats",
      term: "Formatos de exportación",
      definition:
        "Los formatos de exportación son los tipos de archivo y estructuras disponibles para guardar y compartir los resultados del procesamiento de audio. Los formatos comunes incluyen texto plano, PDF, Markdown y datos estructurados, permitiendo a los usuarios integrar los resultados de inteligencia de audio en sus flujos de trabajo, documentos y herramientas de colaboración existentes.",
      link: { href: "/pricing", label: "Ver opciones de exportación por plan" },
    },
    {
      id: "key-points-extraction",
      term: "Extracción de puntos clave",
      definition:
        "La extracción de puntos clave identifica y destaca las ideas, decisiones y hechos más importantes de una grabación de audio. Resume conversaciones extensas en una lista escaneable de conclusiones esenciales, ayudando a los usuarios a comprender rápidamente lo importante sin escuchar o leer el contenido completo.",
      link: { href: "/features/key-points", label: "Ver función de puntos clave" },
    },
    {
      id: "language-model",
      term: "Modelo de lenguaje",
      definition:
        "Un modelo de lenguaje es un sistema de IA que predice la probabilidad de secuencias de palabras, ayudando al reconocimiento de voz a elegir la transcripción más probable. En inteligencia de audio, los modelos de lenguaje también impulsan la generación de resúmenes, planes de acción y otros resultados estructurados al comprender el significado y el contexto del texto transcrito.",
    },
    {
      id: "meeting-notes",
      term: "Notas de reunión",
      definition:
        "Las notas de reunión son registros estructurados de lo que se discutió, decidió y asignó durante una reunión. Las notas de reunión potenciadas por IA van más allá de la toma de notas manual al capturar automáticamente puntos clave, elementos de acción y resúmenes atribuidos por hablante, asegurando que no se pierda nada importante.",
      link: { href: "/use-cases", label: "Ver casos de uso de reuniones" },
    },
    {
      id: "multi-output-transformation",
      term: "Transformación multiformato",
      definition:
        "La transformación multiformato es la capacidad de generar múltiples formatos estructurados a partir de una sola entrada de audio en un solo paso de procesamiento. En lugar de solo una transcripción, el sistema crea simultáneamente resúmenes, puntos clave, tareas, planes de acción, informes y más, maximizando el valor extraído de cada grabación.",
      link: { href: "/features", label: "Ver todos los formatos de salida" },
    },
    {
      id: "natural-language-processing",
      term: "Procesamiento del lenguaje natural (PLN)",
      definition:
        "El procesamiento del lenguaje natural (PLN) es una rama de la inteligencia artificial que permite a las computadoras comprender, interpretar y generar lenguaje humano. En inteligencia de audio, el PLN impulsa la capa de comprensión, analizando el texto transcrito para extraer significado, sentimiento, temas, tareas e información estructurada de las conversaciones.",
    },
    {
      id: "real-time-transcription",
      term: "Transcripción en tiempo real",
      definition:
        "La transcripción en tiempo real convierte el habla en texto a medida que se produce, con una latencia mínima. A diferencia de la transcripción por lotes que procesa una grabación completa, la transcripción en tiempo real transmite resultados en segundos, permitiendo subtítulos en vivo, notas de reunión instantáneas y documentación inmediata del contenido hablado.",
    },
    {
      id: "speaker-attribution",
      term: "Atribución de hablante",
      definition:
        "La atribución de hablante asigna cada declaración hablada al hablante correcto en una conversación con múltiples participantes. Combina la diarización de hablantes con la comprensión contextual para etiquetar quién dijo qué, habilitando funciones como resúmenes por hablante, asignación precisa de tareas y responsabilidad clara en los registros de reuniones.",
      link: { href: "/features/speaker-detection", label: "Ver función de detección de hablantes" },
    },
    {
      id: "speaker-detection",
      term: "Detección de hablantes",
      definition:
        "La detección de hablantes es la capacidad de identificar y distinguir entre diferentes hablantes en una grabación de audio. Reconoce automáticamente cuándo una nueva persona está hablando, atribuye las declaraciones al hablante correcto y utiliza ese contexto para producir resultados más inteligentes, como asignar tareas a la persona adecuada.",
      link: { href: "/features/speaker-detection", label: "Ver función de detección de hablantes" },
    },
    {
      id: "speaker-diarization",
      term: "Diarización de hablantes",
      definition:
        "La diarización de hablantes es el proceso de dividir un flujo de audio en segmentos según quién está hablando. Responde a la pregunta '¿quién habló cuándo?' detectando cambios de hablante y agrupando segmentos de habla por voces individuales, incluso sin conocimiento previo de quiénes son los hablantes.",
      link: { href: "/features/speaker-detection", label: "Ver función de detección de hablantes" },
    },
    {
      id: "speech-to-text",
      term: "Voz a texto",
      definition:
        "Voz a texto (STT), también conocido como reconocimiento automático del habla (ASR), es la tecnología que convierte el habla humana en palabras escritas. Los sistemas STT modernos utilizan redes neuronales profundas para lograr alta precisión en diversos acentos, vocabularios y entornos acústicos.",
    },
    {
      id: "task-extraction",
      term: "Extracción de tareas",
      definition:
        "La extracción de tareas es la identificación y listado automatizado de elementos de acción, pendientes y asignaciones a partir de conversaciones habladas. La IA analiza el contexto de lo dicho para determinar qué declaraciones representan tareas, quién es responsable y qué plazos se mencionaron, convirtiendo las palabras en trabajo rastreable.",
      link: { href: "/features/task-extraction", label: "Ver función de extracción de tareas" },
    },
    {
      id: "transcription",
      term: "Transcripción",
      definition:
        "La transcripción es el proceso de convertir el lenguaje hablado en una grabación de audio en texto escrito. La transcripción moderna potenciada por IA utiliza modelos de aprendizaje profundo para lograr alta precisión en diversos acentos, idiomas y entornos ruidosos, produciendo un registro de texto completo de todo lo que se dijo.",
    },
    {
      id: "voice-activity-detection",
      term: "Detección de actividad vocal (VAD)",
      definition:
        "La detección de actividad vocal (VAD) es una técnica de procesamiento de señales que determina si un segmento dado de audio contiene habla humana o silencio y ruido de fondo. La VAD es un paso de preprocesamiento crítico en los pipelines de audio, mejorando la precisión de la transcripción y reduciendo el tiempo de procesamiento al filtrar segmentos sin habla.",
    },
    {
      id: "voice-fingerprint",
      term: "Huella vocal / Huella de voz",
      definition:
        "Una huella vocal (o huella de voz) es una representación digital única de las características vocales de un individuo, incluyendo tono, timbre, cadencia y patrones de habla. Las huellas vocales se utilizan en sistemas de identificación y verificación de hablantes para reconocer individuos específicos en múltiples grabaciones.",
    },
    {
      id: "voice-notes",
      term: "Notas de voz",
      definition:
        "Las notas de voz son grabaciones de audio cortas utilizadas para capturar pensamientos, ideas, recordatorios o información sobre la marcha. En el contexto de la inteligencia de audio, las notas de voz son transformadas por IA en resultados de texto estructurados — resúmenes, tareas o notas organizadas — haciendo que las ideas habladas sean instantáneamente accionables y buscables.",
      link: { href: "/product", label: "Ver cómo Sythio transforma las notas de voz" },
    },
    {
      id: "word-error-rate",
      term: "Tasa de error de palabras (WER)",
      definition:
        "La tasa de error de palabras (WER) es la métrica estándar para medir la precisión de la transcripción. Calcula el porcentaje de palabras transcritas incorrectamente — incluyendo sustituciones, inserciones y eliminaciones — en comparación con una transcripción de referencia. Un WER más bajo indica mayor precisión; los sistemas de última generación logran un WER inferior al 5%.",
    },
  ],

  /* ────────────────────────────── FRENCH ─────────────────────────────── */
  fr: [
    {
      id: "acoustic-model",
      term: "Modèle acoustique",
      definition:
        "Un modèle acoustique est un composant des systèmes de reconnaissance vocale qui associe les signaux audio aux unités phonétiques. Entraîné sur de vastes ensembles de données vocales, il apprend la relation entre les ondes sonores et les sons d'une langue. Les modèles acoustiques sont essentiels à la conversion précise de l'audio en texte et sont continuellement affinés pour gérer divers accents et environnements bruyants.",
    },
    {
      id: "action-plan-generation",
      term: "Génération de plans d'action",
      definition:
        "La génération de plans d'action est le processus piloté par l'IA qui analyse une conversation et produit un plan structuré avec des étapes claires, des responsabilités et des échéances. Elle extrait automatiquement les engagements et les décisions des réunions et les organise en une feuille de route exécutable, éliminant le besoin de planification manuelle après la réunion.",
      link: { href: "/features/action-plans", label: "Voir la fonction plans d'action" },
    },
    {
      id: "audio-intelligence",
      term: "Intelligence audio",
      definition:
        "L'intelligence audio est l'utilisation de l'IA et de l'apprentissage automatique pour extraire des informations significatives et structurées à partir d'enregistrements audio. Elle va au-delà de la simple transcription pour comprendre le contexte, identifier les locuteurs, détecter les sentiments et générer des résultats exploitables comme des résumés, des tâches et des plans d'action à partir du contenu parlé.",
      link: { href: "/product", label: "Explorer l'intelligence audio de Sythio" },
    },
    {
      id: "audio-library",
      term: "Bibliothèque audio",
      definition:
        "Une bibliothèque audio est une collection organisée et consultable d'enregistrements audio traités et de leurs résultats générés. Elle permet aux utilisateurs de revisiter, rechercher et récupérer des enregistrements antérieurs, des transcriptions, des résumés et des informations extraites, transformant l'historique audio en une base de connaissances précieuse et toujours accessible.",
      link: { href: "/product", label: "Explorer la bibliothèque Sythio" },
    },
    {
      id: "audio-processing-pipeline",
      term: "Pipeline de traitement audio",
      definition:
        "Un pipeline de traitement audio est la séquence d'étapes par lesquelles un enregistrement audio passe pour produire des résultats finaux. Un pipeline typique comprend la réduction du bruit, la détection d'activité vocale, la transcription, la diarisation des locuteurs, l'analyse du TAL et la génération de résultats — chaque étape s'appuyant sur la précédente pour fournir des résultats précis et structurés.",
    },
    {
      id: "audio-summarization",
      term: "Résumé audio",
      definition:
        "Le résumé audio utilise l'IA pour condenser un long enregistrement audio en un résumé bref et cohérent qui capture l'essentiel de la conversation. Plutôt que de lire une transcription complète, les utilisateurs reçoivent les points les plus importants dans un format concis, économisant un temps considérable tout en préservant les informations critiques.",
      link: { href: "/features/ai-summaries", label: "Voir la fonction résumés IA" },
    },
    {
      id: "audio-to-text",
      term: "Audio vers texte",
      definition:
        "L'audio vers texte désigne la vaste catégorie de technologies qui convertissent les enregistrements audio en texte écrit. Cela comprend la transcription de base, mais aussi des transformations plus avancées comme le résumé, l'extraction de tâches et la génération de résultats structurés multiformats à partir de sources audio.",
      link: { href: "/product", label: "Voir les capacités audio vers texte de Sythio" },
    },
    {
      id: "clean-text-processing",
      term: "Traitement de texte propre",
      definition:
        "Le traitement de texte propre transforme la transcription brute et verbatim en prose soignée et lisible. Il supprime les mots de remplissage (euh, hein), les faux départs, les répétitions et les artefacts grammaticaux du discours tout en préservant le sens original — produisant un texte qui se lit aussi naturellement que s'il avait été écrit.",
      link: { href: "/features/clean-text", label: "Voir la fonction texte propre" },
    },
    {
      id: "export-formats",
      term: "Formats d'exportation",
      definition:
        "Les formats d'exportation sont les types de fichiers et les structures disponibles pour enregistrer et partager les résultats du traitement audio. Les formats courants comprennent le texte brut, le PDF, le Markdown et les données structurées, permettant aux utilisateurs d'intégrer les résultats de l'intelligence audio dans leurs flux de travail, documents et outils de collaboration existants.",
      link: { href: "/pricing", label: "Voir les options d'exportation par forfait" },
    },
    {
      id: "key-points-extraction",
      term: "Extraction des points clés",
      definition:
        "L'extraction des points clés identifie et met en évidence les idées, décisions et faits les plus importants d'un enregistrement audio. Elle résume de longues conversations en une liste scannable de conclusions essentielles, aidant les utilisateurs à comprendre rapidement ce qui compte sans écouter ou lire l'intégralité du contenu.",
      link: { href: "/features/key-points", label: "Voir la fonction points clés" },
    },
    {
      id: "language-model",
      term: "Modèle de langage",
      definition:
        "Un modèle de langage est un système d'IA qui prédit la probabilité de séquences de mots, aidant la reconnaissance vocale à choisir la transcription la plus probable. En intelligence audio, les modèles de langage alimentent également la génération de résumés, de plans d'action et d'autres résultats structurés en comprenant le sens et le contexte du texte transcrit.",
    },
    {
      id: "meeting-notes",
      term: "Notes de réunion",
      definition:
        "Les notes de réunion sont des comptes rendus structurés de ce qui a été discuté, décidé et assigné lors d'une réunion. Les notes de réunion alimentées par l'IA vont au-delà de la prise de notes manuelle en capturant automatiquement les points clés, les éléments d'action et les résumés attribués par locuteur, garantissant que rien d'important ne soit oublié.",
      link: { href: "/use-cases", label: "Voir les cas d'usage pour les réunions" },
    },
    {
      id: "multi-output-transformation",
      term: "Transformation multisortie",
      definition:
        "La transformation multisortie est la capacité de générer plusieurs formats structurés à partir d'une seule entrée audio en une seule étape de traitement. Au lieu d'une simple transcription, le système crée simultanément des résumés, des points clés, des tâches, des plans d'action, des rapports et plus encore, maximisant la valeur extraite de chaque enregistrement.",
      link: { href: "/features", label: "Voir tous les formats de sortie" },
    },
    {
      id: "natural-language-processing",
      term: "Traitement automatique du langage naturel (TAL)",
      definition:
        "Le traitement automatique du langage naturel (TAL) est une branche de l'intelligence artificielle qui permet aux ordinateurs de comprendre, interpréter et générer le langage humain. En intelligence audio, le TAL alimente la couche de compréhension — analysant le texte transcrit pour extraire le sens, le sentiment, les sujets, les tâches et les informations structurées des conversations.",
    },
    {
      id: "real-time-transcription",
      term: "Transcription en temps réel",
      definition:
        "La transcription en temps réel convertit la parole en texte au moment où elle est prononcée, avec une latence minimale. Contrairement à la transcription par lots qui traite un enregistrement terminé, la transcription en temps réel diffuse les résultats en quelques secondes, permettant les sous-titres en direct, les notes de réunion instantanées et la documentation immédiate du contenu parlé.",
    },
    {
      id: "speaker-attribution",
      term: "Attribution de locuteur",
      definition:
        "L'attribution de locuteur associe chaque déclaration à la bonne personne dans une conversation à plusieurs participants. Elle combine la diarisation des locuteurs avec la compréhension contextuelle pour identifier qui a dit quoi, permettant des fonctionnalités comme les résumés par locuteur, l'assignation précise des tâches et une responsabilité claire dans les comptes rendus de réunion.",
      link: { href: "/features/speaker-detection", label: "Voir la fonction détection de locuteurs" },
    },
    {
      id: "speaker-detection",
      term: "Détection de locuteurs",
      definition:
        "La détection de locuteurs est la capacité d'identifier et de distinguer les différents locuteurs dans un enregistrement audio. Elle reconnaît automatiquement quand une nouvelle personne parle, attribue les déclarations au bon locuteur et utilise ce contexte pour produire des résultats plus intelligents, comme l'assignation des tâches à la bonne personne.",
      link: { href: "/features/speaker-detection", label: "Voir la fonction détection de locuteurs" },
    },
    {
      id: "speaker-diarization",
      term: "Diarisation des locuteurs",
      definition:
        "La diarisation des locuteurs est le processus de découpage d'un flux audio en segments selon qui parle. Elle répond à la question « qui a parlé quand ? » en détectant les changements de locuteur et en regroupant les segments vocaux par voix individuelles — même sans connaissance préalable de l'identité des locuteurs.",
      link: { href: "/features/speaker-detection", label: "Voir la fonction détection de locuteurs" },
    },
    {
      id: "speech-to-text",
      term: "Reconnaissance vocale",
      definition:
        "La reconnaissance vocale (STT), également connue sous le nom de reconnaissance automatique de la parole (ASR), est la technologie qui convertit la parole humaine en mots écrits. Les systèmes STT modernes utilisent des réseaux de neurones profonds pour atteindre une haute précision dans divers accents, vocabulaires et environnements acoustiques.",
    },
    {
      id: "task-extraction",
      term: "Extraction de tâches",
      definition:
        "L'extraction de tâches est l'identification et le listage automatisés des éléments d'action, des tâches à faire et des assignations à partir de conversations orales. L'IA analyse le contexte de ce qui a été dit pour déterminer quelles déclarations représentent des tâches, qui est responsable et quelles échéances ont été mentionnées — transformant la parole en travail traçable.",
      link: { href: "/features/task-extraction", label: "Voir la fonction extraction de tâches" },
    },
    {
      id: "transcription",
      term: "Transcription",
      definition:
        "La transcription est le processus de conversion du langage parlé dans un enregistrement audio en texte écrit. La transcription moderne alimentée par l'IA utilise des modèles d'apprentissage profond pour atteindre une haute précision dans divers accents, langues et environnements bruyants — produisant un enregistrement textuel complet de tout ce qui a été dit.",
    },
    {
      id: "voice-activity-detection",
      term: "Détection d'activité vocale (VAD)",
      definition:
        "La détection d'activité vocale (VAD) est une technique de traitement du signal qui détermine si un segment audio donné contient de la parole humaine ou du silence et du bruit de fond. La VAD est une étape de prétraitement critique dans les pipelines audio, améliorant la précision de la transcription et réduisant le temps de traitement en filtrant les segments sans parole.",
    },
    {
      id: "voice-fingerprint",
      term: "Empreinte vocale",
      definition:
        "Une empreinte vocale est une représentation numérique unique des caractéristiques vocales d'un individu, incluant la hauteur, le timbre, la cadence et les schémas de parole. Les empreintes vocales sont utilisées dans les systèmes d'identification et de vérification des locuteurs pour reconnaître des individus spécifiques à travers plusieurs enregistrements.",
    },
    {
      id: "voice-notes",
      term: "Notes vocales",
      definition:
        "Les notes vocales sont de courts enregistrements audio utilisés pour capturer des pensées, des idées, des rappels ou des informations en déplacement. Dans le contexte de l'intelligence audio, les notes vocales sont transformées par l'IA en résultats textuels structurés — résumés, tâches ou notes organisées — rendant les idées parlées instantanément exploitables et consultables.",
      link: { href: "/product", label: "Voir comment Sythio transforme les notes vocales" },
    },
    {
      id: "word-error-rate",
      term: "Taux d'erreur de mots (WER)",
      definition:
        "Le taux d'erreur de mots (WER) est la métrique standard pour mesurer la précision de la transcription. Il calcule le pourcentage de mots mal transcrits — incluant les substitutions, insertions et suppressions — par rapport à une transcription de référence. Un WER plus bas indique une meilleure précision ; les systèmes de pointe atteignent un WER inférieur à 5 %.",
    },
  ],

  /* ─────────────────────────── PORTUGUESE ────────────────────────────── */
  pt: [
    {
      id: "acoustic-model",
      term: "Modelo acústico",
      definition:
        "Um modelo acústico é um componente dos sistemas de reconhecimento de fala que mapeia sinais de áudio para unidades fonéticas. Treinado em grandes conjuntos de dados de fala, ele aprende a relação entre ondas sonoras e os sons de um idioma. Modelos acústicos são fundamentais para a conversão precisa de áudio em texto e são continuamente aperfeiçoados para lidar com diversos sotaques e ambientes ruidosos.",
    },
    {
      id: "action-plan-generation",
      term: "Geração de planos de ação",
      definition:
        "A geração de planos de ação é o processo orientado por IA que analisa uma conversa e produz um plano estruturado com etapas claras, responsabilidades e prazos. Extrai automaticamente compromissos e decisões de reuniões e os organiza em um roteiro executável, eliminando a necessidade de planejamento manual pós-reunião.",
      link: { href: "/features/action-plans", label: "Ver recurso de planos de ação" },
    },
    {
      id: "audio-intelligence",
      term: "Inteligência de áudio",
      definition:
        "Inteligência de áudio é o uso de IA e aprendizado de máquina para extrair informações significativas e estruturadas de gravações de áudio. Vai além da simples transcrição para compreender o contexto, identificar falantes, detectar sentimentos e gerar resultados acionáveis como resumos, tarefas e planos de ação a partir de conteúdo falado.",
      link: { href: "/product", label: "Explorar a inteligência de áudio do Sythio" },
    },
    {
      id: "audio-library",
      term: "Biblioteca de áudio",
      definition:
        "Uma biblioteca de áudio é uma coleção organizada e pesquisável de gravações de áudio processadas e seus resultados gerados. Permite aos usuários revisitar, pesquisar e recuperar gravações anteriores, transcrições, resumos e informações extraídas, transformando o histórico de áudio em uma base de conhecimento valiosa e sempre acessível.",
      link: { href: "/product", label: "Explorar a biblioteca do Sythio" },
    },
    {
      id: "audio-processing-pipeline",
      term: "Pipeline de processamento de áudio",
      definition:
        "Um pipeline de processamento de áudio é a sequência de etapas pelas quais uma gravação de áudio passa para produzir resultados finais. Um pipeline típico inclui redução de ruído, detecção de atividade vocal, transcrição, diarização de falantes, análise de PLN e geração de resultados — cada etapa se baseando na anterior para entregar resultados precisos e estruturados.",
    },
    {
      id: "audio-summarization",
      term: "Resumo de áudio",
      definition:
        "O resumo de áudio usa IA para condensar uma longa gravação de áudio em um resumo breve e coerente que captura a essência da conversa. Em vez de ler uma transcrição inteira, os usuários recebem os pontos mais importantes em formato conciso, economizando tempo significativo enquanto preservam informações críticas.",
      link: { href: "/features/ai-summaries", label: "Ver recurso de resumos com IA" },
    },
    {
      id: "audio-to-text",
      term: "Áudio para texto",
      definition:
        "Áudio para texto refere-se à ampla categoria de tecnologias que convertem gravações de áudio em texto escrito. Isso abrange a transcrição básica, mas também inclui transformações mais avançadas como resumo, extração de tarefas e geração de resultados estruturados em múltiplos formatos a partir de fontes de áudio.",
      link: { href: "/product", label: "Ver as capacidades de áudio para texto do Sythio" },
    },
    {
      id: "clean-text-processing",
      term: "Processamento de texto limpo",
      definition:
        "O processamento de texto limpo transforma a transcrição bruta e literal em prosa polida e legível. Remove palavras de preenchimento (hum, é), inícios falsos, repetições e artefatos gramaticais da fala, preservando o significado original — produzindo um texto que se lê tão naturalmente como se tivesse sido escrito.",
      link: { href: "/features/clean-text", label: "Ver recurso de texto limpo" },
    },
    {
      id: "export-formats",
      term: "Formatos de exportação",
      definition:
        "Formatos de exportação são os tipos de arquivo e estruturas disponíveis para salvar e compartilhar os resultados do processamento de áudio. Os formatos comuns incluem texto simples, PDF, Markdown e dados estruturados, permitindo aos usuários integrar os resultados de inteligência de áudio em seus fluxos de trabalho, documentos e ferramentas de colaboração existentes.",
      link: { href: "/pricing", label: "Ver opções de exportação por plano" },
    },
    {
      id: "key-points-extraction",
      term: "Extração de pontos-chave",
      definition:
        "A extração de pontos-chave identifica e destaca as ideias, decisões e fatos mais importantes de uma gravação de áudio. Resume conversas longas em uma lista escaneável de conclusões essenciais, ajudando os usuários a compreender rapidamente o que importa sem ouvir ou ler o conteúdo completo.",
      link: { href: "/features/key-points", label: "Ver recurso de pontos-chave" },
    },
    {
      id: "language-model",
      term: "Modelo de linguagem",
      definition:
        "Um modelo de linguagem é um sistema de IA que prevê a probabilidade de sequências de palavras, ajudando o reconhecimento de fala a escolher a transcrição mais provável. Em inteligência de áudio, os modelos de linguagem também alimentam a geração de resumos, planos de ação e outros resultados estruturados ao compreender o significado e o contexto do texto transcrito.",
    },
    {
      id: "meeting-notes",
      term: "Notas de reunião",
      definition:
        "Notas de reunião são registros estruturados do que foi discutido, decidido e atribuído durante uma reunião. As notas de reunião alimentadas por IA vão além da tomada de notas manual, capturando automaticamente pontos-chave, itens de ação e resumos atribuídos por falante, garantindo que nada importante seja perdido.",
      link: { href: "/use-cases", label: "Ver casos de uso de reuniões" },
    },
    {
      id: "multi-output-transformation",
      term: "Transformação multissaída",
      definition:
        "A transformação multissaída é a capacidade de gerar múltiplos formatos estruturados a partir de uma única entrada de áudio em uma única etapa de processamento. Em vez de apenas uma transcrição, o sistema cria simultaneamente resumos, pontos-chave, tarefas, planos de ação, relatórios e mais, maximizando o valor extraído de cada gravação.",
      link: { href: "/features", label: "Ver todos os formatos de saída" },
    },
    {
      id: "natural-language-processing",
      term: "Processamento de linguagem natural (PLN)",
      definition:
        "O processamento de linguagem natural (PLN) é um ramo da inteligência artificial que permite aos computadores compreender, interpretar e gerar linguagem humana. Em inteligência de áudio, o PLN alimenta a camada de compreensão — analisando o texto transcrito para extrair significado, sentimento, tópicos, tarefas e informações estruturadas das conversas.",
    },
    {
      id: "real-time-transcription",
      term: "Transcrição em tempo real",
      definition:
        "A transcrição em tempo real converte a fala em texto conforme ela é produzida, com latência mínima. Diferente da transcrição em lote que processa uma gravação completa, a transcrição em tempo real transmite resultados em segundos, permitindo legendas ao vivo, notas de reunião instantâneas e documentação imediata do conteúdo falado.",
    },
    {
      id: "speaker-attribution",
      term: "Atribuição de falante",
      definition:
        "A atribuição de falante associa cada declaração ao falante correto em uma conversa com múltiplos participantes. Combina a diarização de falantes com a compreensão contextual para identificar quem disse o quê, permitindo recursos como resumos por falante, atribuição precisa de tarefas e responsabilidade clara nos registros de reunião.",
      link: { href: "/features/speaker-detection", label: "Ver recurso de detecção de falantes" },
    },
    {
      id: "speaker-detection",
      term: "Detecção de falantes",
      definition:
        "A detecção de falantes é a capacidade de identificar e distinguir diferentes falantes em uma gravação de áudio. Reconhece automaticamente quando uma nova pessoa está falando, atribui declarações ao falante correto e usa esse contexto para produzir resultados mais inteligentes, como atribuir tarefas à pessoa certa.",
      link: { href: "/features/speaker-detection", label: "Ver recurso de detecção de falantes" },
    },
    {
      id: "speaker-diarization",
      term: "Diarização de falantes",
      definition:
        "A diarização de falantes é o processo de dividir um fluxo de áudio em segmentos de acordo com quem está falando. Responde à pergunta 'quem falou quando?' detectando mudanças de falante e agrupando segmentos de fala por vozes individuais — mesmo sem conhecimento prévio de quem são os falantes.",
      link: { href: "/features/speaker-detection", label: "Ver recurso de detecção de falantes" },
    },
    {
      id: "speech-to-text",
      term: "Fala para texto",
      definition:
        "Fala para texto (STT), também conhecida como reconhecimento automático de fala (ASR), é a tecnologia que converte a fala humana em palavras escritas. Os sistemas STT modernos usam redes neurais profundas para alcançar alta precisão em diversos sotaques, vocabulários e ambientes acústicos.",
    },
    {
      id: "task-extraction",
      term: "Extração de tarefas",
      definition:
        "A extração de tarefas é a identificação e listagem automatizada de itens de ação, pendências e atribuições a partir de conversas faladas. A IA analisa o contexto do que foi dito para determinar quais declarações representam tarefas, quem é responsável e quais prazos foram mencionados — transformando palavras em trabalho rastreável.",
      link: { href: "/features/task-extraction", label: "Ver recurso de extração de tarefas" },
    },
    {
      id: "transcription",
      term: "Transcrição",
      definition:
        "A transcrição é o processo de converter a linguagem falada em uma gravação de áudio em texto escrito. A transcrição moderna alimentada por IA usa modelos de aprendizado profundo para alcançar alta precisão em diversos sotaques, idiomas e ambientes ruidosos — produzindo um registro de texto completo de tudo o que foi dito.",
    },
    {
      id: "voice-activity-detection",
      term: "Detecção de atividade vocal (VAD)",
      definition:
        "A detecção de atividade vocal (VAD) é uma técnica de processamento de sinais que determina se um dado segmento de áudio contém fala humana ou silêncio e ruído de fundo. A VAD é uma etapa de pré-processamento crítica em pipelines de áudio, melhorando a precisão da transcrição e reduzindo o tempo de processamento ao filtrar segmentos sem fala.",
    },
    {
      id: "voice-fingerprint",
      term: "Impressão vocal",
      definition:
        "Uma impressão vocal é uma representação digital única das características vocais de um indivíduo, incluindo tom, timbre, cadência e padrões de fala. As impressões vocais são usadas em sistemas de identificação e verificação de falantes para reconhecer indivíduos específicos em múltiplas gravações.",
    },
    {
      id: "voice-notes",
      term: "Notas de voz",
      definition:
        "Notas de voz são gravações de áudio curtas usadas para capturar pensamentos, ideias, lembretes ou informações em movimento. No contexto da inteligência de áudio, as notas de voz são transformadas por IA em resultados de texto estruturados — resumos, tarefas ou notas organizadas — tornando as ideias faladas instantaneamente acionáveis e pesquisáveis.",
      link: { href: "/product", label: "Ver como o Sythio transforma notas de voz" },
    },
    {
      id: "word-error-rate",
      term: "Taxa de erro de palavras (WER)",
      definition:
        "A taxa de erro de palavras (WER) é a métrica padrão para medir a precisão da transcrição. Calcula a porcentagem de palavras transcritas incorretamente — incluindo substituições, inserções e exclusões — em comparação com uma transcrição de referência. Um WER mais baixo indica maior precisão; sistemas de última geração alcançam WER abaixo de 5%.",
    },
  ],

  /* ────────────────────────────── ITALIAN ────────────────────────────── */
  it: [
    {
      id: "acoustic-model",
      term: "Modello acustico",
      definition:
        "Un modello acustico è un componente dei sistemi di riconoscimento vocale che mappa i segnali audio in unità fonetiche. Addestrato su grandi insiemi di dati vocali, apprende la relazione tra onde sonore e suoni di una lingua. I modelli acustici sono fondamentali per la conversione accurata dell'audio in testo e vengono continuamente perfezionati per gestire diversi accenti e ambienti rumorosi.",
    },
    {
      id: "action-plan-generation",
      term: "Generazione di piani d'azione",
      definition:
        "La generazione di piani d'azione è il processo guidato dall'IA che analizza una conversazione e produce un piano strutturato con passaggi chiari, responsabilità e tempistiche. Estrae automaticamente impegni e decisioni dalle riunioni e li organizza in una roadmap eseguibile, eliminando la necessità di pianificazione manuale post-riunione.",
      link: { href: "/features/action-plans", label: "Vedi funzione piani d'azione" },
    },
    {
      id: "audio-intelligence",
      term: "Intelligenza audio",
      definition:
        "L'intelligenza audio è l'uso dell'IA e dell'apprendimento automatico per estrarre informazioni significative e strutturate dalle registrazioni audio. Va oltre la semplice trascrizione per comprendere il contesto, identificare i parlanti, rilevare i sentimenti e generare risultati utilizzabili come riassunti, attività e piani d'azione dal contenuto parlato.",
      link: { href: "/product", label: "Esplora l'intelligenza audio di Sythio" },
    },
    {
      id: "audio-library",
      term: "Libreria audio",
      definition:
        "Una libreria audio è una raccolta organizzata e ricercabile di registrazioni audio elaborate e dei relativi risultati generati. Permette agli utenti di rivisitare, cercare e recuperare registrazioni precedenti, trascrizioni, riassunti e informazioni estratte, trasformando lo storico audio in una base di conoscenza preziosa e sempre accessibile.",
      link: { href: "/product", label: "Esplora la libreria di Sythio" },
    },
    {
      id: "audio-processing-pipeline",
      term: "Pipeline di elaborazione audio",
      definition:
        "Una pipeline di elaborazione audio è la sequenza di fasi attraverso cui passa una registrazione audio per produrre risultati finali. Una pipeline tipica include riduzione del rumore, rilevamento dell'attività vocale, trascrizione, diarizzazione dei parlanti, analisi PNL e generazione di risultati — ogni fase si basa sulla precedente per fornire risultati accurati e strutturati.",
    },
    {
      id: "audio-summarization",
      term: "Riassunto audio",
      definition:
        "Il riassunto audio utilizza l'IA per condensare una lunga registrazione audio in un riassunto breve e coerente che cattura l'essenza della conversazione. Invece di leggere un'intera trascrizione, gli utenti ricevono i punti più importanti in un formato conciso, risparmiando tempo significativo e preservando le informazioni critiche.",
      link: { href: "/features/ai-summaries", label: "Vedi funzione riassunti IA" },
    },
    {
      id: "audio-to-text",
      term: "Audio in testo",
      definition:
        "Audio in testo si riferisce all'ampia categoria di tecnologie che convertono le registrazioni audio in testo scritto. Comprende la trascrizione di base, ma include anche trasformazioni più avanzate come la sintesi, l'estrazione di attività e la generazione di risultati strutturati multiformato da fonti audio.",
      link: { href: "/product", label: "Vedi le capacità audio in testo di Sythio" },
    },
    {
      id: "clean-text-processing",
      term: "Elaborazione testo pulito",
      definition:
        "L'elaborazione di testo pulito trasforma la trascrizione grezza e letterale in prosa curata e leggibile. Rimuove le parole di riempimento (ehm, cioè), i falsi inizi, le ripetizioni e gli artefatti grammaticali del parlato preservando il significato originale — producendo un testo che si legge naturalmente come se fosse stato scritto.",
      link: { href: "/features/clean-text", label: "Vedi funzione testo pulito" },
    },
    {
      id: "export-formats",
      term: "Formati di esportazione",
      definition:
        "I formati di esportazione sono i tipi di file e le strutture disponibili per salvare e condividere i risultati dell'elaborazione audio. I formati comuni includono testo semplice, PDF, Markdown e dati strutturati, consentendo agli utenti di integrare i risultati dell'intelligenza audio nei flussi di lavoro, documenti e strumenti di collaborazione esistenti.",
      link: { href: "/pricing", label: "Vedi opzioni di esportazione per piano" },
    },
    {
      id: "key-points-extraction",
      term: "Estrazione dei punti chiave",
      definition:
        "L'estrazione dei punti chiave identifica e mette in evidenza le idee, le decisioni e i fatti più importanti da una registrazione audio. Sintetizza lunghe conversazioni in un elenco scansionabile di conclusioni essenziali, aiutando gli utenti a capire rapidamente cosa conta senza ascoltare o leggere l'intero contenuto.",
      link: { href: "/features/key-points", label: "Vedi funzione punti chiave" },
    },
    {
      id: "language-model",
      term: "Modello linguistico",
      definition:
        "Un modello linguistico è un sistema di IA che prevede la probabilità di sequenze di parole, aiutando il riconoscimento vocale a scegliere la trascrizione più probabile. Nell'intelligenza audio, i modelli linguistici alimentano anche la generazione di riassunti, piani d'azione e altri risultati strutturati comprendendo il significato e il contesto del testo trascritto.",
    },
    {
      id: "meeting-notes",
      term: "Note di riunione",
      definition:
        "Le note di riunione sono registrazioni strutturate di ciò che è stato discusso, deciso e assegnato durante una riunione. Le note di riunione alimentate dall'IA vanno oltre la presa di appunti manuale, catturando automaticamente punti chiave, elementi d'azione e riassunti attribuiti per parlante, garantendo che nulla di importante venga perso.",
      link: { href: "/use-cases", label: "Vedi casi d'uso per le riunioni" },
    },
    {
      id: "multi-output-transformation",
      term: "Trasformazione multiuscita",
      definition:
        "La trasformazione multiuscita è la capacità di generare molteplici formati strutturati da un singolo input audio in un'unica fase di elaborazione. Invece di una sola trascrizione, il sistema crea simultaneamente riassunti, punti chiave, attività, piani d'azione, report e altro ancora, massimizzando il valore estratto da ogni registrazione.",
      link: { href: "/features", label: "Vedi tutti i formati di output" },
    },
    {
      id: "natural-language-processing",
      term: "Elaborazione del linguaggio naturale (PNL)",
      definition:
        "L'elaborazione del linguaggio naturale (PNL) è un ramo dell'intelligenza artificiale che consente ai computer di comprendere, interpretare e generare il linguaggio umano. Nell'intelligenza audio, la PNL alimenta il livello di comprensione — analizzando il testo trascritto per estrarre significato, sentimento, argomenti, attività e informazioni strutturate dalle conversazioni.",
    },
    {
      id: "real-time-transcription",
      term: "Trascrizione in tempo reale",
      definition:
        "La trascrizione in tempo reale converte il parlato in testo mentre viene pronunciato, con latenza minima. A differenza della trascrizione batch che elabora una registrazione completata, la trascrizione in tempo reale trasmette i risultati in pochi secondi, consentendo sottotitoli dal vivo, note di riunione istantanee e documentazione immediata del contenuto parlato.",
    },
    {
      id: "speaker-attribution",
      term: "Attribuzione del parlante",
      definition:
        "L'attribuzione del parlante associa ogni dichiarazione al parlante corretto in una conversazione con più partecipanti. Combina la diarizzazione dei parlanti con la comprensione contestuale per identificare chi ha detto cosa, abilitando funzionalità come riassunti per parlante, assegnazione precisa delle attività e responsabilità chiara nei verbali delle riunioni.",
      link: { href: "/features/speaker-detection", label: "Vedi funzione rilevamento parlanti" },
    },
    {
      id: "speaker-detection",
      term: "Rilevamento dei parlanti",
      definition:
        "Il rilevamento dei parlanti è la capacità di identificare e distinguere diversi parlanti in una registrazione audio. Riconosce automaticamente quando una nuova persona sta parlando, attribuisce le dichiarazioni al parlante corretto e utilizza tale contesto per produrre risultati più intelligenti, come l'assegnazione delle attività alla persona giusta.",
      link: { href: "/features/speaker-detection", label: "Vedi funzione rilevamento parlanti" },
    },
    {
      id: "speaker-diarization",
      term: "Diarizzazione dei parlanti",
      definition:
        "La diarizzazione dei parlanti è il processo di suddivisione di un flusso audio in segmenti in base a chi sta parlando. Risponde alla domanda 'chi ha parlato quando?' rilevando i cambi di parlante e raggruppando i segmenti vocali per voci individuali — anche senza conoscenza preventiva dell'identità dei parlanti.",
      link: { href: "/features/speaker-detection", label: "Vedi funzione rilevamento parlanti" },
    },
    {
      id: "speech-to-text",
      term: "Riconoscimento vocale",
      definition:
        "Il riconoscimento vocale (STT), noto anche come riconoscimento automatico del parlato (ASR), è la tecnologia che converte il parlato umano in parole scritte. I sistemi STT moderni utilizzano reti neurali profonde per raggiungere un'elevata precisione con diversi accenti, vocabolari e ambienti acustici.",
    },
    {
      id: "task-extraction",
      term: "Estrazione delle attività",
      definition:
        "L'estrazione delle attività è l'identificazione e la catalogazione automatizzata di elementi d'azione, cose da fare e assegnazioni dalle conversazioni parlate. L'IA analizza il contesto di ciò che è stato detto per determinare quali affermazioni rappresentano attività, chi è responsabile e quali scadenze sono state menzionate — trasformando le parole in lavoro tracciabile.",
      link: { href: "/features/task-extraction", label: "Vedi funzione estrazione attività" },
    },
    {
      id: "transcription",
      term: "Trascrizione",
      definition:
        "La trascrizione è il processo di conversione del linguaggio parlato in una registrazione audio in testo scritto. La trascrizione moderna alimentata dall'IA utilizza modelli di deep learning per raggiungere un'elevata precisione con diversi accenti, lingue e ambienti rumorosi — producendo un registro testuale completo di tutto ciò che è stato detto.",
    },
    {
      id: "voice-activity-detection",
      term: "Rilevamento dell'attività vocale (VAD)",
      definition:
        "Il rilevamento dell'attività vocale (VAD) è una tecnica di elaborazione del segnale che determina se un dato segmento audio contiene parlato umano oppure silenzio e rumore di fondo. Il VAD è una fase critica di pre-elaborazione nelle pipeline audio, migliorando la precisione della trascrizione e riducendo i tempi di elaborazione filtrando i segmenti senza parlato.",
    },
    {
      id: "voice-fingerprint",
      term: "Impronta vocale",
      definition:
        "Un'impronta vocale è una rappresentazione digitale unica delle caratteristiche vocali di un individuo, tra cui tono, timbro, cadenza e schemi del parlato. Le impronte vocali vengono utilizzate nei sistemi di identificazione e verifica dei parlanti per riconoscere individui specifici attraverso più registrazioni.",
    },
    {
      id: "voice-notes",
      term: "Note vocali",
      definition:
        "Le note vocali sono brevi registrazioni audio utilizzate per catturare pensieri, idee, promemoria o informazioni in movimento. Nel contesto dell'intelligenza audio, le note vocali vengono trasformate dall'IA in risultati testuali strutturati — riassunti, attività o note organizzate — rendendo le idee parlate immediatamente utilizzabili e ricercabili.",
      link: { href: "/product", label: "Scopri come Sythio trasforma le note vocali" },
    },
    {
      id: "word-error-rate",
      term: "Tasso di errore delle parole (WER)",
      definition:
        "Il tasso di errore delle parole (WER) è la metrica standard per misurare la precisione della trascrizione. Calcola la percentuale di parole trascritte in modo errato — incluse sostituzioni, inserimenti e cancellazioni — rispetto a una trascrizione di riferimento. Un WER più basso indica una maggiore precisione; i sistemi all'avanguardia raggiungono un WER inferiore al 5%.",
    },
  ],
};

/* ─── Glossary Page ─── */
export default function GlossaryPage() {
  const { s, locale } = useLanguage();

  const terms = glossaryTerms[locale] || glossaryTerms.en;

  /* ─── Alphabet Index (derived from active locale) ─── */
  const alphabet = Array.from(
    new Set(terms.map((t) => t.term[0].toUpperCase()))
  ).sort();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 hero-animated-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-background pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-border-light mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-muted">
                {s("glossary.label")}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-foreground">
              {s("glossary.title")}
            </h1>

            <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              {s("glossary.subtitle")}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/product"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                {s("common.exploreProduct")}
              </Link>
              <Link
                href="/features"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
              >
                {s("common.allFeatures")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Alphabet Quick Nav */}
      <section className="bg-white border-b border-border-light sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav
            aria-label="Alphabet navigation"
            className="flex flex-wrap items-center justify-center gap-1.5"
          >
            {alphabet.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-medium text-muted hover:text-foreground hover:bg-foreground/5 transition-colors duration-200"
              >
                {letter}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          {alphabet.map((letter) => {
            const termsForLetter = terms.filter(
              (t) => t.term[0].toUpperCase() === letter
            );
            return (
              <div key={letter} id={`letter-${letter}`} className="mb-14 last:mb-0 scroll-mt-24">
                {/* Letter Header */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground/15 select-none">
                    {letter}
                  </span>
                  <div className="h-px flex-1 bg-border-light" />
                </div>

                {/* Term Cards */}
                <div className="space-y-4">
                  {termsForLetter.map((item) => (
                    <div
                      key={item.id}
                      id={item.id}
                      className="scroll-mt-24 bg-white rounded-2xl border border-border-light p-6 sm:p-8 border-l-4 border-l-indigo-200 hover:border-l-indigo-400 hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-300"
                    >
                      <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-3">
                        <a href={`#${item.id}`} className="hover:text-accent-muted transition-colors">
                          {item.term}
                        </a>
                      </h3>
                      <p className="text-sm sm:text-base text-muted leading-relaxed">
                        {item.definition}
                      </p>
                      {item.link && (
                        <Link
                          href={item.link.href}
                          className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                        >
                          {item.link.label}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-16 md:py-20 bg-white border-t border-border-light">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground tracking-tight">
                {terms.length}
              </div>
              <div className="text-sm text-muted mt-1">{s("glossary.termsDefined")}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground tracking-tight">
                {alphabet.length}
              </div>
              <div className="text-sm text-muted mt-1">{s("glossary.categories")}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground tracking-tight">
                9+
              </div>
              <div className="text-sm text-muted mt-1">{s("glossary.outputFormats")}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground tracking-tight">
                5+
              </div>
              <div className="text-sm text-muted mt-1">{s("glossary.languages")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {s("glossary.learnMore")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedLinks[locale].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-center gap-2 p-6 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500 text-center"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">
                  {link.label}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted group-hover:translate-x-1 transition-transform duration-300"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              {s("glossary.ctaTitle")}
            </h2>
            <p className="mt-7 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
              {s("glossary.ctaSubtitle")}
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                {s("common.getStartedFree")}
              </Link>
              <Link
                href="/product"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-foreground text-base font-medium hover:bg-foreground hover:text-white transition-all duration-300"
              >
                {s("common.exploreProduct")}
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted">
              {s("common.freePlan")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
