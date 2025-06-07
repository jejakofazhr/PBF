import React, { useMemo } from 'react';

interface ExpensiveComponentProps {
  data: number[];
}

export default function ExpensiveComponent({ data }: ExpensiveComponentProps) {
  const computedData = useMemo(() => {
    // Operasi berat yang hanya dihitung ulang jika 'data' berubah
    return data.map(item => item * 2);
  }, [data]);

  return <div>{computedData.join(', ')}</div>;
}
