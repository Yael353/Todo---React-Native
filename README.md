# Todo app i React Native

I dagens uppgift ska vi öva på Navigiering i React Native.

### Sätt upp projektet med React Navigation eller Expo router

## Hur du klarar uppgiften

1. Sätt upp en StackNavigator med 3 Screens: Home, Detail och Add.
2. Skapa `[todos, setTodos]` med `useState` på Home, där alla todo-items kommer att ligga.
3. Använd `FlatList` för att visa todos på Home.
4. Varje item i `FlatList` ska kunna navigera till sin Detail-sida. Datan för varje item skickas med i navigate-funktionen. Skicka även med funktioner för att updatera state. T.ex. för Done och Delete. Läs på om att skicka data mellan routes här: [Params](https://reactnavigation.org/docs/params). Använd `TouchableOpacity` som knapp för varje item.
5. Add-sidan ska vara en `Modal`. Se denna guide: [Modal](https://reactnavigation.org/docs/modal/)

## Hur du lämnar in

1. Skapa ett repo på github.
2. Ladd up dina filer till github:
