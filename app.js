// ─ Translations ────────────────────────────────────────────

const translations = {
  'prc-business': {
    en: `As a market researcher preparing reports on product changes, I need to manually gather product information using a browser. I need a solution that generates a list of products, evaluates their market situation based on standardised weights, and summarises the current market situation in a report. These activities take too much of my time.`,
    pl: `Jako market researcher przygotowujący raporty z obszaru zmian w produktach, muszę manualnie zbierać informację o produktach w oparciu o użycie przeglądarki. Potrzebuję rozwiązanie, które wygeneruje mi listę produktów, oceni ich sytuację rynkową w oparciu o ustandaryzowane wagi oraz podsumuje obecną sytuację na rynku w postaci raportu. Te czynności zabierają mi za dużo czasu.`
  },
  'prc-why': {
    en: `The LLM has the ability to browse news on the web targeted at the area indicated by the user.`,
    pl: `LLM posiada możliwość przeglądania wiadomości w sieci ukierunkowanych na wskazany przez użytkownika obszar.`
  },
  'prc-llm': {
    en: `The LLM searches the web according to the prompt instructions, evaluates information on the basis of the prompt criteria, and compiles a data summary together with a business report.`,
    pl: `LLM wyszukuje dane w sieci w oparciu o prompt, ocenia informacje na bazie instrukcji z prompt, kompiluje zestawienie danych oraz raport biznesowy.`
  },
  'prc-complex': {
    en: `The LLM searches news according to the instructions and semantically evaluates information on a scale, then generates a business report.`,
    pl: `LLM przeszukuje zgodnie z instrukcją wiadomości i semantycznie dokonuje oceny informacji w skali, generuje raport biznesowy.`
  },
  'prc-extensions': {
    en: `Prompt configuration for topics other than products (e.g. legal changes), expanded dashboard and reporting capabilities (summary built from multiple source reports).`,
    pl: `Konfiguracja promptu pod zagadnienia inne niż produktowe (np. zmiany prawne), poszerzenie dashboardu oraz możliwości raportowania (podsumowanie zbudowane o wiele raportów źródłowych).`
  },

  'tlad-business': {
    en: `As a business representative or analyst, I want to be able to define the functionalities of a business system. Based on a written description I want to understand and model a form solution with its lifecycle (low-code solutions), visualise the application scope, identify logical gaps, missing buttons, and unconsidered paths. I have a description of the solution and it is time-consuming to transform that description into the real shape of an application (stages, transition paths) and to visualise it.`,
    pl: `Jak przedstawiciel biznesu lub analityk chcę móc zdefiniować funkcjonalności systemu biznesowego. W oparciu o spisany opis chcę zrozumieć i zamodelować rozwiązanie formularza z jego cyklem życia (rozwiązania low-code), zwizualizować zakres aplikacji, zidentyfikować braki logiczne, brakujące przyciski, nieprzemyślane ścieżki. Posiadam opis rozwiązania i czasochłonnym jest przekształcenie opisu na realny kształt aplikacji (etapy, ścieżki przejścia) oraz jego wizualizacja.`
  },
  'tlad-why': {
    en: `The LLM is able to process written text into the table structure of an application (elements, connections).`,
    pl: `LLM potrafi przetworzyć tekst pisany na strukturę tabel aplikacji (elementy, połączenia).`
  },
  'tlad-llm': {
    en: `Based on the prompt and the user's input data, the LLM generates a technical table that is interpretable by the application.`,
    pl: `LLM na podstawie prompt i danych wsadowych użytkownika - generuje techniczną tabelę interpretowalną przez aplikacje.`
  },
  'tlad-complex': {
    en: `The LLM semantically processes text and transforms it into standardised technical tables.`,
    pl: `LLM semantycznie przetwarza text i przekształca na techniczne ustandaryzowane tabele.`
  },
  'tlad-extensions': {
    en: `A section for defining form fields (identification based on descriptive data), a more advanced drawing configurator (currently basic functionality), and an application version strictly tailored to BPMN.`,
    pl: `Sekcja dla definicji pól formularza (identyfikacja na podstawie danych opisowych), bardziej rozbudowany konfigurator rysowania (obecnie podstawowe funkcjonalności), wersja aplikacji stricte dopasowana do BPMN.`
  },

  'bdcp-business': {
    en: `As a business data expert I hold data in the form of a table — source data and a result column representing historical records. I would like to build a business model, verify whether my assumptions are confirmed (relationships between data, understanding of data range min/max), and use that model/algorithm to predict new results. The application could guide me step by step on how to prepare the data and create such an algorithm, and catch potential errors in the algorithm design.`,
    pl: `Jako ekspert od danych biznesowych dysonuję danymi w postaci tabeli - dane źródłowe oraz kolumna wynikowa. Zestawienie danych historycznych. Chciałbym móc zbudować model biznesowy, zweryfikować czy moje założenia się potwierdzają (relacje między danymi, rozumienie zakresu danych min/max), móc użyć tego modelu/algorytmu w predykcji nowych wyników. Aplikacja mogłaby mnie pokierować krok po kroku jak utworzyć przygotować dane i jak utworzyć taki algorytm, wyłapać potencjalne błędy przy projektowaniu algorytmu.`
  },
  'bdcp-why': {
    en: `The application guides the user step by step on how to configure data for preparing the algorithm. The application measures the effectiveness of linear regression and highlights problems. The LLM report provides descriptive information about the strengths and weaknesses of the model.`,
    pl: `Aplikacja instruuje użytkownika krok po kroku jak skonfigurować dane do przygotowania algorytmu. Aplikacja mierzy skuteczność regresji liniowej, wskazuje problemy. Raport LLM dostarcza informacji opisowych o mocnych i słabych stronach modelu.`
  },
  'bdcp-llm': {
    en: `The LLM plays an additional supporting role in evaluating the quality of the algorithm (Linear Regression).`,
    pl: `LLM pełnie dodatkową role supportującą w ocenie jakości algorytmu (Linear Regression).`
  },
  'bdcp-complex': {
    en: `An advanced algorithm configurator, analysis of algorithm/model quality, and prediction based on historical data.`,
    pl: `Rozbudowany konfigurator budowania algorytmu, analiza jakości algorytmu/modelu, predykcja na podstawie historycznych danych.`
  },
  'bdcp-extensions': {
    en: `Extension to two-dimensional data (normal distribution), more versions of Linear Regression, and enrichment of data with new reports evaluating model quality.`,
    pl: `Poszerzenie o dane dwuwymiarowe (rozkład normalny), więcej wersji Linear Regression, poszerzenie danych o nowe raporty oceniające jakość modelu.`
  }
};

// ── Language state ────────────────────────────────────────────
let currentLang = 'en';

// ── Modal logic ───────────────────────────────────────────────
const overlays  = document.querySelectorAll('.modal-overlay');
const buttons   = document.querySelectorAll('.section-btn');
const langBtns  = document.querySelectorAll('.lang-btn');

function getModalId(overlay) {
  return overlay.id.replace('modal-', '');
}

function setModalContent(overlay, lang) {
  const id = getModalId(overlay);
  const t  = translations[id];
  if (!t) return;
  const p = overlay.querySelector('.modal p');
  if (p) p.textContent = t[lang];
}

function openModal(id) {
  const overlay = document.getElementById('modal-' + id);
  if (!overlay) return;
  setModalContent(overlay, currentLang);
  overlay.classList.add('active');
  const closeBtn = overlay.querySelector('.modal-close');
  if (closeBtn) closeBtn.focus();
  document.body.style.overflow = 'hidden';
}

function closeModal(overlay) {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function closeAllModals() {
  overlays.forEach(closeModal);
}

// Open on button click
buttons.forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.modal));
});

// Close on × button
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const overlay = btn.closest('.modal-overlay');
    if (overlay) closeModal(overlay);
  });
});

// Close on backdrop click
overlays.forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal(overlay);
  });
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeAllModals();
});

// ── Language switch ───────────────────────────────────────────
langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    if (lang === currentLang) return;
    currentLang = lang;

    // Update active state
    langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

    // If a modal is currently open, refresh its content immediately
    overlays.forEach(overlay => {
      if (overlay.classList.contains('active')) {
        setModalContent(overlay, lang);
      }
    });
  });
});
