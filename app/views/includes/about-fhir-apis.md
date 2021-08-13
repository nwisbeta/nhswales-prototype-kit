## About FHIR APIs

### Overview

Fast Healthcare Interoperability Resources (FHIR) is a standard for quickly and accurately transferring healthcare data between systems.

Working to a standard framework means that data can be shared more consistently wherever patient care is taking place. Read [how NHS Wales is working with FHIR APIs (opens in a new tab)](https://digitalhealth.wales/news/fhir-interoperability-wales).

FHIR is free to use, and designed to be easy to understand and implement. You can find detailed [information about FHIR specifications (opens in a new tab)](http://hl7.org/fhir/summary.html) on the HL7 website.

* * *

### Working with FHIR API resources

FHIR has components called resources that can be used to define terminologies, as well as clear specifications for presenting terminologies. Resources are the building blocks of every request.

#### Types of FHIR API resource

| Resource type      | What it is |
| ----------- | ----------- |
| CodeSystem | A collection of codes, also known as an ontology or terminology |
| ValueSet | A specific subset of codes from the CodeSystem |
| ConceptMap | Defines the relationship between concepts, including from one CodeSystem to another |

{% from 'components/card/macro.njk' import card %}

{{ card({
    "heading": "Example",
    "headingLevel": "3",
    "descriptionHtml": "<p>If you were using the API to request Welsh and English gender data:</p><ul><li>the CodeSystem is the data dictionary item 'gender'</li><li>the ValueSet includes all codes related to gender, such as 'female' and 'non-binary'</li><li>the ConceptMap could be used to translate gender ValueSets from NHS Wales and NHS England to make them consistent, for example if NHS England combines 'non-binary' and 'unknown' as a single concept, but NHS Wales records them as separate concepts</li></ul>"
}) }}

Each resource is structured in the same way, with:

*   a URL that identifies the resource
*   common metadata
*   an XHTML summary
*   a set of defined data elements
*   an extensibility framework to support variation in healthcare

Read more in [HL7's FHIR overview of resources (opens in a new tab)](https://build.fhir.org/resource.html).

* * *

### Creating actions with operations

Terminology FHIR APIs have a simple set of interactions like `GET` and `READ` that follow a RESTful structure. To input and output content from resources, you use operations.

Operations are structured by pairing the URL from the FHIR endpoint with the name of an operation, which is prefixed by a dollar symbol ($). For example:

`GET http://exampleURL.com/path/ResourceType/id/$operation`

#### Types of operations

| Resource type | Operation | What it does |
| :---  |    :---   |  :--- |
| CodeSystem | `$lookup`  | Get information about the concept of a CodeSystem, including its defintion and status |
| ValueSet   | `$expand` | Create a simple collection of codes from the definition of the ValueSet |
| ConceptMap   | `$translate` | Translate a code from one ValueSet to another |
| ConceptMap   | `$closure` | Return a ConceptMap with a list of mappings of new entries to make in a closure table |

{{ card({
    "href": "#",
    "clickable": "true",
    "heading": "Try an example request",
    "headingClasses": "nhsuk-heading-m",
    "description": "See how the API works by trying a sample request"
}) }}