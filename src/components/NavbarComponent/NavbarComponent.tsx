import { Checkbox, Rate } from "antd";
import {
  WrapperContent,
  WrapperLableText,
  WrapperTextPrice,
  WrapperTextValue,
} from "./styled";

const NavbarComponent = () => {
  const onChange = () => {};

  const renderContent = (type: string, options: any[]) => {
    switch (type) {
      case "text":
        return options.map((option: any, index: number) => (
          <WrapperTextValue key={index}>{option}</WrapperTextValue>
        ));
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option) => (
              <Checkbox
                style={{ marginLeft: 0 }}
                value={option.value}
                key={option.value}
              >
                {option.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => {
          return (
            <div style={{ display: "flex" }}>
              <Rate
                style={{ fontSize: "12px" }}
                disabled
                defaultValue={option}
              />
              <span> {`tu ${option}  sao`}</span>
            </div>
          );
        });
      case "price":
        return options.map((option) => {
          return <WrapperTextPrice>{option}</WrapperTextPrice>;
        });
      default:
        return null;
    }
  };

  return (
    <div>
      <WrapperLableText>label</WrapperLableText>
      <WrapperContent>
        {renderContent("text", ["Tu lanh", "TV", "MAYGIAT"])}
      </WrapperContent>
      <WrapperContent>
        {renderContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
          { value: "c", label: "C" },
        ])}
      </WrapperContent>
      <WrapperContent>{renderContent("star", [3, 4, 5])}</WrapperContent>
      <WrapperContent>
        {renderContent("price", ["duoi 40", "tren 50.000"])}
      </WrapperContent>
    </div>
  );
};

export default NavbarComponent;
