# Terminology search FHIR API
<p class="nhsuk-lede-text">
    How to search and read clinical terminologies like SNOMED CT using FHIR resources
</p>

{% from 'components/inset-text/macro.njk' import insetText %}

{{ insetText({
"HTML": "<span class='nhsuk-u-visually-hidden'>Information: </span><p>This content is not translated into Welsh because it is not intended for patients or the public. <a href='#'>Read our Welsh language standards</a>.</p>"
}) }}

## Overview

To improve patient outcomes, clinical systems need to use and understand a shared, consistent language so that care is more joined-up.

The terminology service FHIR API enables you to develop applications that interact with clinical terminologies and retrieve content using a set of national standards.

### About the terminology service

The terminology service is part of the [National Data Resource (NDR) programme (opens in a new tab)](https://digitalhealth.wales/national-data-resource). It has an important role in the digital transformation agenda for NHS Wales, using an open platform approach to digital innovation by publishing national standards for how software and technologies work together.

The way that electronic healthcare records are written and stored can differ between care settings. This makes it difficult to share content quickly and accurately from one clinical system to another.

The terminology service gives that content structure. It assigns unique codes to information like symptoms, medications and procedures to form a consistent clinical terminology that can be processed by any system. For example, one clinician might record a diagnosis as 'influenza', and another might record it as 'flu'. A terminology service translates those synonyms into one code that can be understood by both computers and clinicians.

### SNOMED CT is our standard terminology

[SNOMED CT was adopted as ministerial policy (opens in a new tab)](https://gov.wales/sites/default/files/publications/2019-08/introduction-of-snomed-ct-as-an-information-standard-in-nhs-wales.pdf) in 2015 by the Minister for Health & Social Services. It is now NHS Wales' standard clinical terminology.

Other terminologies and classifications that we use include:

*   [LOINC (opens in a new tab)](https://loinc.org/), or Logical Observation Identifiers Names and Codes, a standard for health measurements, observations, and documents
*   [NICIP (opens in a new tab)](https://digital.nhs.uk/services/terminology-and-classifications/national-interim-clinical-imaging-procedure-nicip-code-set), or National Interim Clinical Imaging Procedure, a standard for procedures and direct commissioning of services
*   [ICD-10 (opens in a new tab)](https://nwis.nhs.wales/information-services/information-standards/clinical-classifications-and-terminology-standards/clinical-classifications-and-terminologies-standards-doc/icd-10-essentials-document-pdf/), or International Classification of Diseases 10, a classification of diseases, clinical documentation, and statistical aggregation
*   [OPCS (opens in a new tab)](https://datadictionary.nhs.uk/supporting_information/opcs_classification_of_interventions_and_procedures.html), a classification of interventions and procedures
