import "../styles.css"
import Navbar from "../components/Navbar";
import { useState } from "react"
export function Book() {
    const [ages, setAges] = useState({});
    const [selectedSeats, setSeats] = useState([]);
    const addSeat = (seat) => {
        setSeats((prev) => {
            const updatedSeats = [...prev];
            if (updatedSeats.includes(seat)) {
                updatedSeats.splice(updatedSeats.indexOf(seat), 1);
                const { [seat]: _, ...rest } = ages;
                setAges(rest);
            } else {
                updatedSeats.push(seat);
                setAges((prev) => ({ ...prev, [seat]: '' }));
            }
            return updatedSeats;
        });
    };
    const handleAgeChange = (seat, value) => {
        setAges((prev) => ({
            ...prev,
            [seat]: value,
        }));
    };
    return <>
    <Navbar />
    <h1 className="below">Book Tickets</h1>
    <h4>*Movie Name*</h4>
    <h4>Select Time:</h4>
    <form method="POST">
        <select id="time">
            <option value="first">Time 1</option>
            <option value="second">Time 2</option>
            <option value="third">Time 3</option>
        </select>
        <h4>Select Seats:</h4>
        <div className="rows">
        <div className="col">
            <div>
                <label htmlFor="a1">A1</label>
                <input type="checkbox" id="a1" onChange={() => addSeat("A1: ")}></input>
            </div>
            <div>
                <label for="b1">B1</label>
                <input type="checkbox" id="b1" onChange={() => addSeat("B1: ")}></input>
            </div>
            <div>
                <label for="c1">C1</label>
                <input type="checkbox" id="c1" onChange={() => addSeat("C1: ")}></input>
            </div>
            <div>
                <label for="d1">D1</label>
                <input type="checkbox" id="d1" onChange={() => addSeat("D1: ")}></input>
            </div>
            <div>
                <label for="e1">E1</label>
                <input type="checkbox" id="e1" onChange={() => addSeat("E1: ")}></input>
            </div>
            <div>
                <label for="f1">F1</label>
                <input type="checkbox" id="f1" onChange={() => addSeat("F1: ")}></input>
            </div>
            <div>
                <label for="g1">G1</label>
                <input type="checkbox" id="g1" onChange={() => addSeat("G1: ")}></input>
            </div>
            <div>
                <label for="h1">H1</label>
                <input type="checkbox" id="h1" onChange={() => addSeat("H1: ")}></input>
            </div>
        </div>
        <div className="col">
        <div>
                <label for="a2">A2</label>
                <input type="checkbox" id="a2" onChange={() => addSeat("A2: ")}></input>
            </div>
            <div>
                <label for="b2">B2</label>
                <input type="checkbox" id="b2" onChange={() => addSeat("B2: ")}></input>
            </div>
            <div>
                <label for="c2">C2</label>
                <input type="checkbox" id="c2" onChange={() => addSeat("C2: ")}></input>
            </div>
            <div>
                <label for="d2">D2</label>
                <input type="checkbox" id="d2" onChange={() => addSeat("D2: ")}></input>
            </div>
            <div>
                <label for="e2">E2</label>
                <input type="checkbox" id="e2" onChange={() => addSeat("E2: ")}></input>
            </div>
            <div>
                <label for="f2">F2</label>
                <input type="checkbox" id="f2" onChange={() => addSeat("F2: ")}></input>
            </div>
            <div>
                <label for="g2">G2</label>
                <input type="checkbox" id="g2" onChange={() => addSeat("G2: ")}></input>
            </div>
            <div>
                <label for="h2">H2</label>
                <input type="checkbox" id="h2" onChange={() => addSeat("H2: ")}></input>
            </div>
        </div>
        <div className="col">
            <div>
                <label for="a3">A3</label>
                <input type="checkbox" id="a3" onChange={() => addSeat("A3: ")}></input>
            </div>
            <div>
                <label for="b3">B3</label>
                <input type="checkbox" id="b3" onChange={() => addSeat("B3: ")}></input>
            </div>
            <div>
                <label for="c3">C3</label>
                <input type="checkbox" id="c3" onChange={() => addSeat("C3: ")}></input>
            </div>
            <div>
                <label for="d3">D3</label>
                <input type="checkbox" id="d3" onChange={() => addSeat("D3: ")}></input>
            </div>
            <div>
                <label for="e3">E3</label>
                <input type="checkbox" id="e3" onChange={() => addSeat("E3: ")}></input>
            </div>
            <div>
                <label for="f3">F3</label>
                <input type="checkbox" id="f3" onChange={() => addSeat("F3: ")}></input>
            </div>
            <div>
                <label for="g3">G3</label>
                <input type="checkbox" id="g3" onChange={() => addSeat("G3: ")}></input>
            </div>
            <div>
                <label for="h3">H3</label>
                <input type="checkbox" id="h3" onChange={() => addSeat("H3: ")}></input>
            </div>
        </div>
        <div className="col">
            <div>
                <label for="a4">A4</label>
                <input type="checkbox" id="a4" onChange={() => addSeat("A4: ")}></input>
            </div>
            <div>
                <label for="b4">B4</label>
                <input type="checkbox" id="b4" onChange={() => addSeat("B4: ")}></input>
            </div>
            <div>
                <label for="c4">C4</label>
                <input type="checkbox" id="c4" onChange={() => addSeat("C4: ")}></input>
            </div>
            <div>
                <label for="d4">D4</label>
                <input type="checkbox" id="d4" onChange={() => addSeat("D4: ")}></input>
            </div>
            <div>
                <label for="e4">E4</label>
                <input type="checkbox" id="e4" onChange={() => addSeat("E4: ")}></input>
            </div>
            <div>
                <label for="f4">F4</label>
                <input type="checkbox" id="f4" onChange={() => addSeat("F4: ")}></input>
            </div>
            <div>
                <label for="g4">G4</label>
                <input type="checkbox" id="g4" onChange={() => addSeat("G4: ")}></input>
            </div>
            <div>
                <label for="h4">H4</label>
                <input type="checkbox" id="h4" onChange={() => addSeat("H4: ")}></input>
            </div>
        </div>
        <div className="col">
            <div>
                <label for="a5">A5</label>
                <input type="checkbox" id="a5" onChange={() => addSeat("A5: ")}></input>
            </div>
            <div>
                <label for="b5">B5</label>
                <input type="checkbox" id="b5" onChange={() => addSeat("B5: ")}></input>
            </div>
            <div>
                <label for="c5">C5</label>
                <input type="checkbox" id="c5" onChange={() => addSeat("C5: ")}></input>
            </div>
            <div>
                <label for="d5">D5</label>
                <input type="checkbox" id="d5" onChange={() => addSeat("D5: ")}></input>
            </div>
            <div>
                <label for="e5">E5</label>
                <input type="checkbox" id="e5" onChange={() => addSeat("E5: ")}></input>
            </div>
            <div>
                <label for="f5">F5</label>
                <input type="checkbox" id="f5" onChange={() => addSeat("F5: ")}></input>
            </div>
            <div>
                <label for="g5">G5</label>
                <input type="checkbox" id="g5" onChange={() => addSeat("G5: ")}></input>
            </div>
            <div>
                <label for="h5">H5</label>
                <input type="checkbox" id="h5" onChange={() => addSeat("H5: ")}></input>
            </div>
        </div>
        <div className="col">
            <div>
                <label for="a6">A6</label>
                <input type="checkbox" id="a6" onChange={() => addSeat("A6: ")}></input>
            </div>
            <div>
                <label for="b6">B6</label>
                <input type="checkbox" id="b6" onChange={() => addSeat("B6: ")}></input>
            </div>
            <div>
                <label for="c6">C6</label>
                <input type="checkbox" id="c6" onChange={() => addSeat("C6: ")}></input>
            </div>
            <div>
                <label for="d6">D6</label>
                <input type="checkbox" id="d6" onChange={() => addSeat("D6: ")}></input>
            </div>
            <div>
                <label for="e6">E6</label>
                <input type="checkbox" id="e6" onChange={() => addSeat("E6: ")}></input>
            </div>
            <div>
                <label for="f6">F6</label>
                <input type="checkbox" id="f6" onChange={() => addSeat("F6: ")}></input>
            </div>
            <div>
                <label for="g6">G6</label>
                <input type="checkbox" id="g6" onChange={() => addSeat("G6: ")}></input>
            </div>
            <div>
                <label for="h6">H6</label>
                <input type="checkbox" id="h6" onChange={() => addSeat("H6: ")}></input>
            </div>
        </div>
        <div className="col">
            <div>
                <label for="a7">A7</label>
                <input type="checkbox" id="a7" onChange={() => addSeat("A7: ")}></input>
            </div>
            <div>
                <label for="b7">B7</label>
                <input type="checkbox" id="b7" onChange={() => addSeat("B7: ")}></input>
            </div>
            <div>
                <label for="c7">C7</label>
                <input type="checkbox" id="c7" onChange={() => addSeat("C7: ")}></input>
            </div>
            <div>
                <label for="d7">D7</label>
                <input type="checkbox" id="d7" onChange={() => addSeat("D7: ")}></input>
            </div>
            <div>
                <label for="e7">E7</label>
                <input type="checkbox" id="e7" onChange={() => addSeat("E7: ")}></input>
            </div>
            <div>
                <label for="f7">F7</label>
                <input type="checkbox" id="f7" onChange={() => addSeat("F7: ")}></input>
            </div>
            <div>
                <label for="g7">G7</label>
                <input type="checkbox" id="g7" onChange={() => addSeat("G7: ")}></input>
            </div>
            <div>
                <label for="h7">H7</label>
                <input type="checkbox" id="h7" onChange={() => addSeat("H7: ")}></input>
            </div>
        </div>
        <div className="col">
            <div>
                <label for="a8">A8</label>
                <input type="checkbox" id="a8" onChange={() => addSeat("A8: ")}></input>
            </div>
            <div>
                <label for="b8">B8</label>
                <input type="checkbox" id="b8" onChange={() => addSeat("B8: ")}></input>
            </div>
            <div>
                <label for="c8">C8</label>
                <input type="checkbox" id="c8" onChange={() => addSeat("C8: ")}></input>
            </div>
            <div>
                <label for="d8">D8</label>
                <input type="checkbox" id="d8" onChange={() => addSeat("D8: ")}></input>
            </div>
            <div>
                <label for="e8">E8</label>
                <input type="checkbox" id="e8" onChange={() => addSeat("E8: ")}></input>
            </div>
            <div>
                <label for="f8">F8</label>
                <input type="checkbox" id="f8" onChange={() => addSeat("F8: ")}></input>
            </div>
            <div>
                <label for="g8">G8</label>
                <input type="checkbox" id="g8" onChange={() => addSeat("G8: ")}></input>
            </div>
            <div>
                <label for="h8">H8</label>
                <input type="checkbox" id="h8" onChange={() => addSeat("H8: ")}></input>
            </div>
        </div>
        </div>
        <h4>Enter Ages for Selected Seats:</h4>
                <div className="age-inputs">
                    {selectedSeats.map((seat) => (
                        <div key={seat}>
                            <label htmlFor={seat}>{seat}</label>
                            <input
                                type="number"
                                id={seat}
                                placeholder="Age"
                                value={ages[seat] || ''}
                                onChange={(e) => handleAgeChange(seat, e.target.value)}
                            />
                        </div>
                    ))}
                </div>
        <input type="submit" className="FinishButton"></input>
    </form>
    </>
}