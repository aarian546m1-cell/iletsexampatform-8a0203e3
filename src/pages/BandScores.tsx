import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BAND_DESCRIPTORS } from "@/lib/ielts-config";
import { Badge } from "@/components/ui/badge";

const listeningTable = [
  { raw: "39-40", band: 9 }, { raw: "37-38", band: 8.5 }, { raw: "35-36", band: 8 },
  { raw: "33-34", band: 7.5 }, { raw: "30-32", band: 7 }, { raw: "27-29", band: 6.5 },
  { raw: "23-26", band: 6 }, { raw: "20-22", band: 5.5 }, { raw: "16-19", band: 5 },
  { raw: "13-15", band: 4.5 }, { raw: "10-12", band: 4 },
];

const readingTable = [
  { raw: "39-40", band: 9 }, { raw: "37-38", band: 8.5 }, { raw: "35-36", band: 8 },
  { raw: "33-34", band: 7.5 }, { raw: "30-32", band: 7 }, { raw: "27-29", band: 6.5 },
  { raw: "23-26", band: 6 }, { raw: "20-22", band: 5.5 }, { raw: "15-19", band: 5 },
  { raw: "13-14", band: 4.5 }, { raw: "10-12", band: 4 },
];

export default function BandScores() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl">IELTS Band Score Guide</h1>
          <p className="mt-2 text-muted-foreground">
            Understand how raw scores convert to band scores and what each band level means.
          </p>
        </div>

        {/* Band Descriptors */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-sans text-lg">Band Score Descriptors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(BAND_DESCRIPTORS)
                .sort(([a], [b]) => Number(b) - Number(a))
                .map(([band, desc]) => (
                  <div key={band} className="flex gap-4">
                    <Badge variant="outline" className="h-8 w-12 shrink-0 justify-center text-sm font-bold">
                      {band}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Conversion Tables */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-sans text-lg">Listening Conversion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-2 pb-2 text-sm font-semibold text-muted-foreground">
                  <span>Raw Score (out of 40)</span>
                  <span>Band Score</span>
                </div>
                {listeningTable.map((row) => (
                  <div key={row.raw} className="grid grid-cols-2 rounded-lg border px-3 py-2 text-sm">
                    <span>{row.raw}</span>
                    <span className="font-semibold">{row.band}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-sans text-lg">Reading Conversion (Academic)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-2 pb-2 text-sm font-semibold text-muted-foreground">
                  <span>Raw Score (out of 40)</span>
                  <span>Band Score</span>
                </div>
                {readingTable.map((row) => (
                  <div key={row.raw} className="grid grid-cols-2 rounded-lg border px-3 py-2 text-sm">
                    <span>{row.raw}</span>
                    <span className="font-semibold">{row.band}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Overall Calculation */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="font-sans text-lg">Overall Band Score Calculation</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p className="mb-3">
              Your overall IELTS band score is calculated by averaging the four module scores (Listening, Reading, Writing, Speaking) and rounding to the nearest whole or half band.
            </p>
            <div className="rounded-lg bg-muted p-4">
              <p className="font-medium text-foreground">Example:</p>
              <p className="mt-1">Listening: 7.0 + Reading: 7.5 + Writing: 6.5 + Speaking: 7.0 = 28.0 ÷ 4 = <strong className="text-primary">7.0</strong></p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
