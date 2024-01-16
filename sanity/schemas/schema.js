import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import ventaap from "./ventaap";
import arriendoap from "./arriendoap";
import vacacionalesap from "./vacacionalesap";
import proyectos from "./proyectos";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    ventaap,
    arriendoap,
    vacacionalesap,
    proyectos
  ]),
});
